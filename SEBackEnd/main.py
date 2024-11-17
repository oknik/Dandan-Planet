from flask import Flask


def create_app():
    app = Flask(__name__)
    import tts
    app.register_blueprint(tts.bp, url_prefix='/tts')  # 注册路由
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=9000, debug=True)
