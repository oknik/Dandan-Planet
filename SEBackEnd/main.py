from flask import Flask
from database import db


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@localhost/se_project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    db.init_app(app)
    import tts
    import math_learning
    import checkin
    app.register_blueprint(tts.bp, url_prefix='/tts')  # 注册路由
    app.register_blueprint(math_learning.bp, url_prefix='/math')
    app.register_blueprint(checkin.bp, url_prefix='/checkin')
    with app.app_context():
        db.create_all()
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=9000, debug=True)
