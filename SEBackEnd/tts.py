from flask import Blueprint, request, jsonify
import edge_tts
import os
from datetime import datetime


async def read_text(voice, text, output_file) -> None:
    communicate = edge_tts.Communicate(text, voice, rate="+0%")
    await communicate.save(output_file)


bp = Blueprint('tts', __name__)
# 中文：女音，男音，小孩音
# 英式英语：女音，男音，小孩音
voice_list = ['zh-CN-XiaoxiaoNeural', 'zh-CN-YunxiNeural', 'zh-CN-YunxiaNeural',
              'en-GB-SoniaNeural', 'en-GB-RyanNeural', 'en-GB-MaisieNeural',
              'zh-CN-XiaoyiNeural']


@bp.route("/get-text", methods=['POST'])
async def get_text():
    response = {
        "response": {
            "isError": True,
            "msg": "",
        }
    }
    try:
        data = request.get_json()
        text = data.get('text')
        voice_type = data.get('voice_type', 0)
        voice = voice_list[int(voice_type)]
        print(f"接收到post请求{text},{voice}")
        output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audio')  # 当前绝对路径
        if not os.path.isdir(output_dir):
          os.makedirs(output_dir)
        file_prefix = datetime.now().strftime('%H_%M_%S')
        print(file_prefix)
        output_filename = os.path.join(output_dir, f"{file_prefix}.mp3")
        print(output_filename)
        await read_text(voice, text, output_filename)

        response['response']['data'] = f"{file_prefix}.mp3"
        response['response']['isError'] = False
    except Exception as e:
        response['response']['msg'] = str(e)
    return jsonify(response)
