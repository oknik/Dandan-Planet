from models import db, User, Checkin
from datetime import datetime
from flask import Blueprint, request, jsonify

bp = Blueprint('checkin', __name__)


@bp.route('/', methods=['POST'])
def sign_in():

    try:

        data = request.get_json()
        phone_number = data.get('phone_number')
        if not phone_number:
            return jsonify({"response": {"message": "Phone number is required"}}), 400

        # 获取今天的日期
        today = datetime.today().date()
        user = User.query.filter_by(phone_number=phone_number).first()
        if not user:
            return jsonify({"response": {"message": "User with the provided phone number does not exist"}}), 404

        # 查询用户是否已经签到
        checkin_exists = Checkin.query.filter_by(user_id=user.id, sign_in_date=today).first()
        if checkin_exists:
            return jsonify({"response": {"message": "You have already signed in today"}}), 400

        # 签到成功，记录签到
        new_checkin = Checkin(user_id=user.id, sign_in_date=today)
        db.session.add(new_checkin)

        # 更新用户的星星数量
        user.stars += 1
        db.session.commit()
        return jsonify({'response': {'message': 'Sign-in successful!', 'stars': user.stars}}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"response": {"message": "Failed to sign in", "error": str(e)}}), 500
