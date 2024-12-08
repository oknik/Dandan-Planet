from flask import Blueprint, request, jsonify
import random

bp = Blueprint('math', __name__)


# 比大小接口
@bp.route('/compare', methods=['POST'])
def compare_numbers():
    response = {
        "response": {
            "isError": True,
            "msg": "",
            "result": False,
            "correct_answer": "",
        }
    }

    try:
        data = request.get_json()
        a = data.get('a')
        b = data.get('b')
        operator = data.get('operator')

        if a is None or b is None:
            response['response']['msg'] = "参数a和b不能为空"
            return jsonify(response)
        if operator not in ['big', 'same', 'small']:
            response['response']['msg'] = "无效的比较符号"
            return jsonify(response)

        result = False
        if operator == 'big':
            result = a > b
        elif operator == 'small':
            result = a < b
        elif operator == 'same':
            result = a == b

        if not result:
            if a > b:
                response['response']['correct_answer'] = 'big'
            elif a < b:
                response['response']['correct_answer'] = 'small'
            else:
                response['response']['correct_answer'] = 'same'

        response['response']['result'] = result
        response['response']['isError'] = False
        response['response']['msg'] = '已返回结果'
    except Exception as e:
        response['response']['msg'] = f"发生错误: {str(e)}"

    return jsonify(response)


# 加减法接口
@bp.route('/calculate', methods=['POST'])
def calculate():
    response = {
        "response": {
            "isError": True,
            "msg": "",
            "result": False,
            "correct_answer": -1,
        }
    }

    try:
        data = request.get_json()
        a = data.get('a')
        b = data.get('b')
        operator = data.get('operator')
        c = data.get('c')

        if a is None or b is None or c is None or operator is None:
            response['response']['msg'] = "参数a, b, c, operator不能为空"
            return jsonify(response)

        if operator not in ['+', '-']:
            response['response']['msg'] = "无效的运算符，支持 + 和 -"
            return jsonify(response)

        result = None
        if operator == '+':
            result = a + b
            response['response']['correct_answer'] = a + b
        elif operator == '-':
            result = a - b
            response['response']['correct_answer'] = a - b

        response['response']['result'] = (result == c)
        response['response']['isError'] = False
    except Exception as e:
        response['response']['msg'] = str(e)

    return jsonify(response)


# 随机出题
@bp.route('/get_random', methods=['GET'])
def get_random():
    response = {
        "response": {
            "isError": False,
            "msg": "",
            "a": -1,
            "b": -1
        }
    }

    try:
        a = random.randint(0, 9)
        b = random.randint(0, 9)
        response['response']['a'] = a
        response['response']['b'] = b
    except Exception as e:
        response['response']['isError'] = True
        response['response']['msg'] = str(e)

    return jsonify(response)
