from flask import Blueprint, request, jsonify

bp = Blueprint('math', __name__)


# 比大小接口
@bp.route('/compare', methods=['POST'])
def compare_numbers():
    response = {
        "response": {
            "isError": True,
            "msg": "",
            "result": False
        }
    }

    try:
        data = request.get_json()
        a = data.get('a')
        b = data.get('b')
        operator = data.get('operator', '>')  # 默认使用大于比较

        # 参数验证
        if a is None or b is None:
            response['response']['msg'] = "参数a和b不能为空"
            return jsonify(response)

        if operator not in ['>', '<', '>=', '<=', '==', '!=']:
            response['response']['msg'] = "无效的比较符号"
            return jsonify(response)
        # 比较逻辑
        result = False
        if operator == '>':
            result = a > b
        elif operator == '<':
            result = a < b
        elif operator == '>=':
            result = a >= b
        elif operator == '<=':
            result = a <= b
        elif operator == '==':
            result = a == b
        elif operator == '!=':
            result = a != b
        response['response']['result'] = result
        response['response']['isError'] = False
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
            "result": False
        }
    }

    try:
        data = request.get_json()
        a = data.get('a')
        b = data.get('b')
        operator = data.get('operator')  # 传入加减法符号 "+" 或 "-"
        c = data.get('c')

        # 参数验证
        if a is None or b is None or c is None or operator is None:
            response['response']['msg'] = "参数a, b, c, operator不能为空"
            return jsonify(response)

        if operator not in ['+', '-']:
            response['response']['msg'] = "无效的运算符，支持 + 和 -"
            return jsonify(response)

        # 加减法计算
        result = None
        if operator == '+':
            result = a + b
        elif operator == '-':
            result = a - b

        response['response']['result'] = (result == c)  # 返回是否结果正确
        response['response']['isError'] = False
    except Exception as e:
        response['response']['msg'] = f"发生错误: {str(e)}"

    return jsonify(response)
