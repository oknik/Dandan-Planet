# auth.py
from flask import Flask, request, jsonify
from database import db
from flask import Blueprint

import random
import time
from datetime import datetime
from models import User, Child, VerificationCode, Checkin
import re
from send_sms import Sample

auth = Blueprint('auth', __name__)


# 注册用户的路由
@auth.route('/register', methods=['POST'])
def register():
    # 首先通过 json 格式数据从前端获取信息
    data = request.json
    username = data['username']
    password = data['password']
    child_birthdate = data['birthdate']
    child_gender = data['gender']
    phone_number = data['phone_number']
    verification_code = data['code']

    # 用户名已经存在
    if User.query.filter_by(username=username).first():
        return jsonify({"response": {'message': 'Username already exists'}}), 400
    # 手机号已经存在
    if User.query.filter_by(phone_number=phone_number).first():
        return jsonify({"response": {'message': 'Phone number already registered'}}), 400

    # 验证验证码
    record = VerificationCode.query.filter_by(phone_number=phone_number).first()
    if not record:  # 没有使用该手机号发送过验证码
        return jsonify({"response": {'message': 'Phone number not found'}}), 404

    if time.time() > record.expiry_time:  # 发送的验证码已经到期
        return jsonify({"response": {'message': 'Verification code expired'}}), 400

    if verification_code != record.code:  # 验证码错误
        return jsonify({"response": {'message': 'Verification code incorrect'}}), 400

    db.session.delete(record)
    db.session.commit()

    # 创建新用户
    new_user = User(username=username, phone_number=phone_number, )
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()

    # 添加孩子信息
    child_birthdate = datetime.strptime(child_birthdate, '%Y-%m-%d').date()
    child = Child(user_id=new_user.id, birthdate=child_birthdate, gender=child_gender)
    db.session.add(child)
    db.session.commit()

    return jsonify({"response": {'message': 'User created'}}), 201


@auth.route('/retrieve', methods=['POST'])
def retrieve():
    # 获取请求中的 JSON 数据
    data = request.json
    phone_number = data.get('phone_number')
    password = data.get('password')

    # 检查输入是否合法
    if not phone_number or not password:
        return jsonify({"response": {"message": "Phone number and new password are required"}}), 400

    # 查找用户
    user = User.query.filter_by(phone_number=phone_number).first()

    if not user:  # 如果用户不存在
        return jsonify({"response": {"message": "User with the provided phone number does not exist"}}), 404

    # 检查新密码是否与原密码相同
    if user.check_password(password):
        return jsonify({"response": {"message": "New password cannot be the same as the old password"}}), 400

    # 更新密码
    user.set_password(password)

    # 提交更改到数据库
    try:
        db.session.commit()
        return jsonify({"response": {"message": "Password updated successfully"}}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"response": {"message": "Failed to update password", "error": str(e)}}), 500


# 登陆用户的路由
@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    phone_number = data['phone_number']
    password = data['password']

    user = User.query.filter_by(phone_number=phone_number).first()

    today = datetime.today().date()
    checkin_exists = Checkin.query.filter_by(user_id=user.id, sign_in_date=today).first()

    sign_status = False  # 默认未签到
    if checkin_exists:
        sign_status = True  # 已签到
    if user and user.check_password(password):
        # 返回姓名、等级、stars
        return jsonify({
            'response': {
                'message': 'Login successful',
                'username': user.username,  # 姓名
                'level': user.level,  # 等级
                'stars': user.stars,  # stars
                'sign_status': sign_status,
                'userphone': user.phone_number
            }
        }), 200
    else:
        return jsonify({'response': {'message': 'Invalid credentials'}}), 401


@auth.route('/login_with_code', methods=['POST'])
def login_with_code():
    # 首先通过 json 格式数据从前端获取信息
    data = request.json
    print(data)
    phone_number = data['phone_number']
    verification_code = data['code']

    # 验证验证码
    record = VerificationCode.query.filter_by(phone_number=phone_number).first()
    print(record.expiry_time)
    print(time.time())
    if not record:  # 没有使用该手机号发送过验证码
        return jsonify({"response": {'message': 'Phone number not found'}}), 404
    print(1)
    if time.time() > record.expiry_time:  # 发送的验证码已经到期
        return jsonify({"response": {'message': 'Verification code expired'}}), 400
    print(2)
    if verification_code != record.code:  # 验证码错误
        return jsonify({"response": {'message': 'Verification code incorrect'}}), 400

    user = User.query.filter_by(phone_number=phone_number).first()
    today = datetime.today().date()
    checkin_exists = Checkin.query.filter_by(user_id=user.id, sign_in_date=today).first()

    sign_status = False  # 默认未签到
    if checkin_exists:
        sign_status = True  # 已签到
    return jsonify({
        'response': {
            'message': 'Login successful',
            'username': user.username,  # 姓名
            'level': user.level,  # 等级
            'stars': user.stars,  # stars
            'sign_status': sign_status,
            'userphone': user.phone_number
        }
    }), 200


# 发送验证码的接口
@auth.route('/send_verification', methods=['POST'])
def send_verification():
    data = request.json
    phone_number = data.get('phone_number')
    print(phone_number)
    # 校验电话号码
    if not re.match(r"^1[3-9]\d{9}$", phone_number):
        return jsonify({"response": {'message': 'Invalid phone number'}}), 400
    # 生成随机验证码
    verification_code = f"{random.randint(100000, 999999)}"
    print(time.time())
    expiry_time = int(time.time() + 300)  # 获取当前时间，验证码有效期 5 分钟
    # 存储到数据库中
    existing = VerificationCode.query.filter_by(phone_number=phone_number).first()
    if existing:
        existing.code = verification_code
        existing.expiry_time = expiry_time
    else:
        new_verification = VerificationCode(phone_number=phone_number, code=verification_code, expiry_time=expiry_time)
        db.session.add(new_verification)
    db.session.commit()
    # 调用阿里云发送短信接口
    response = Sample.send_sms(phone_number, verification_code)
    print(verification_code)
    if response:
        # 如果发送成功，返回响应
        return jsonify({"response": {'message': 'Verification code sent', 'code': verification_code}}), 200
    else:
        return jsonify({"response": {'message': 'Failed to send verification code'}}), 500

# 调用实际 API
# def send_sms(phone_number, code):
#     client = AcsClient('<YourAccessKeyId>', '<YourAccessKeySecret>', 'cn-hangzhou')
#
#     request = CommonRequest()
#     request.set_accept_format('json')
#     request.set_domain('dysmsapi.aliyuncs.com')
#     request.set_method('POST')
#     request.set_protocol_type('https')
#     request.set_version('2017-05-25')
#     request.set_action_name('SendSms')
#
#     request.add_query_param('RegionId', 'cn-hangzhou')
#     request.add_query_param('PhoneNumbers', phone_number)
#     request.add_query_param('SignName', '<YourSignName>')
#     request.add_query_param('TemplateCode', '<YourTemplateCode>')
#     request.add_query_param('TemplateParam', f'{{"code":"{code}"}}')
#
#     response = client.do_action_with_exception(request)
#     print(str(response, encoding='utf-8'))
