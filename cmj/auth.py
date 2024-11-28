# auth.py
from flask import Flask, request, jsonify
from models import db
from flask import Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
# 使用阿里云接口，但是我没有获得阿里云的短信服务。。先写着我实际的代码中暂时也没调用这个
from aliyunsdkcore.client import AcsClient
from aliyunsdkcore.request import CommonRequest
import random
import time
from datetime import datetime
import re


auth = Blueprint('auth', __name__)

# 用户信息，连接数据库存放
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)    # id
    username = db.Column(db.String(20), unique=True, nullable=False)    # 用户名
    password_hash = db.Column(db.String(128), nullable=False)           # 密码
    phone_number = db.Column(db.String(11), unique=True, nullable=False)    # 手机号
    # 密码转为哈希值存储
    def set_password(self, password):
        self.password_hash = generate_password_hash(password,method='pbkdf2:sha256')
    # 验证密码
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# 孩子信息？
class Child(db.Model):
    __tablename__ = 'child'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete = 'CASCADE'), nullable=False)
    birthdate = db.Column(db.Date, nullable=False)
    gender = db.Column(db.Enum('Male','Female'), nullable=False)
    user = db.relationship('User', backref='child', lazy=True)

# 短信验证码信息，连接数据库存放
class VerificationCode(db.Model):
    __tablename__ = 'verification_code'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    phone_number = db.Column(db.String(11), unique=True, nullable=False)
    code = db.Column(db.String(6), nullable=False)
    expiry_time = db.Column(db.Float, nullable=False)

# 话说这数据库这样。。是对的吗？？？

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
        return jsonify({'message':'Username already exists'}), 400
    # 手机号已经存在
    if User.query.filter_by(phone_number=phone_number).first():
        return jsonify({'message': 'Phone number already registered'}), 400

    # 验证验证码
    record = VerificationCode.query.filter_by(phone_number=phone_number).first()
    if not record:  # 没有使用该手机号发送过验证码
        return jsonify({'message': 'Phone number not found'}), 404

    if time.time() > record.expiry_time:    # 发送的验证码已经到期
        return jsonify({'message': 'Verification code expired'}), 400

    if verification_code != record.code:    # 验证码错误
        return jsonify({'message': 'Verification code incorrect'}), 400

    db.session.delete(record)
    db.session.commit()

    # 创建新用户
    new_user = User(username=username,phone_number=phone_number,)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    # 添加孩子信息
    child_birthdate = datetime.strptime(child_birthdate, '%Y-%m-%d').date()
    child = Child(user_id=new_user.id, birthdate=child_birthdate, gender=child_gender)
    db.session.add(child)
    db.session.commit()

    return jsonify({'message':'User created'}), 201


#登陆用户的路由
@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        return jsonify({'message':'Login successful'}), 200
    else:
        return jsonify({'message':'Wrong username or password'}), 401


# 发送验证码的接口, 现在无法向真实的手机发送短信，可能要调用别的 API 。。先放着
@auth.route('/send_verification', methods=['POST'])
def send_verification():
    data = request.json
    phone_number = data.get('phone_number')
    # 校验电话号码。。


    if not re.match(r"^1[3-9]\d{9}$", phone_number):
        return jsonify({'message': 'Invalid phone number'}), 400
    # 生成随机验证码
    verification_code = f"{random.randint(100000, 999999)}"
    expiry_time = time.time() + 300  # 获取当前时间，验证码有效期 5 分钟
    # 存储到数据库中
    existing = VerificationCode.query.filter_by(phone_number=phone_number).first()
    if existing:
        existing.code = verification_code
        existing.expiry_time = expiry_time
    else:
        new_verification = VerificationCode(phone_number=phone_number, code=verification_code, expiry_time=expiry_time)
        db.session.add(new_verification)
    db.session.commit()
    # 模拟发送短信（实际开发中调用短信服务 API）
    # send_sms(phone_number, verification_code)
    print(f"Sending SMS to {phone_number}: Your verification code is {verification_code}")

    return jsonify({'message': 'Verification code sent'}), 200


# 调用实际 API
def send_sms(phone_number, code):
    client = AcsClient('<YourAccessKeyId>', '<YourAccessKeySecret>', 'cn-hangzhou')

    request = CommonRequest()
    request.set_accept_format('json')
    request.set_domain('dysmsapi.aliyuncs.com')
    request.set_method('POST')
    request.set_protocol_type('https')
    request.set_version('2017-05-25')
    request.set_action_name('SendSms')

    request.add_query_param('RegionId', 'cn-hangzhou')
    request.add_query_param('PhoneNumbers', phone_number)
    request.add_query_param('SignName', '<YourSignName>')
    request.add_query_param('TemplateCode', '<YourTemplateCode>')
    request.add_query_param('TemplateParam', f'{{"code":"{code}"}}')

    response = client.do_action_with_exception(request)
    print(str(response, encoding='utf-8'))
