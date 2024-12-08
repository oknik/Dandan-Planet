from models import db, User, Checkin
from datetime import datetime
from flask import Blueprint, request, jsonify

bp = Blueprint('checkin', __name__)


@bp.route('/', methods=['POST'])
def sign_in():
    response = {
        "response": {
            "isError": False,
            "msg": "",
            "stars": None
        }
    }

    try:

        data = request.get_json()
        user_id = data.get('user_id')
        if not user_id:
            response['response']['isError'] = True
            response['response']['msg'] = 'User ID is required'
            return jsonify(response)

        # 获取今天的日期
        today = datetime.today().date()
        user = User.query.get(user_id)
        if not user:
            response['response']['isError'] = True
            response['response']['msg'] = 'User not found!'
            return jsonify(response)

        # 查询用户是否已经签到
        checkin_exists = Checkin.query.filter_by(user_id=user_id, sign_in_date=today).first()
        if checkin_exists:
            response['response']['isError'] = True
            response['response']['msg'] = 'You have already signed in today!'
            response['response']['stars'] = user.stars
            return jsonify(response)

        # 签到成功，记录签到
        new_checkin = Checkin(user_id=user_id, sign_in_date=today)
        db.session.add(new_checkin)

        # 更新用户的星星数量
        user.stars += 1
        db.session.commit()

        response['response']['msg'] = 'Sign-in successful!'
        response['response']['stars'] = user.stars

    except Exception as e:
        db.session.rollback()
        response['response']['isError'] = True
        response['response']['msg'] = str(e)

    return jsonify(response)
