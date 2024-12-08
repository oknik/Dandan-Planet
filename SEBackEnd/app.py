from flask import Flask
from database import db
from models import User
import pymysql
pymysql.install_as_MySQLdb()


def create_app(*args, **kwargs):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@localhost/se_project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    db.init_app(app)
    import tts
    import math_learning
    import checkin
    import auth
    app.register_blueprint(tts.bp, url_prefix='/tts')  # 注册路由
    app.register_blueprint(math_learning.bp, url_prefix='/math')
    app.register_blueprint(checkin.bp, url_prefix='/checkin')
    app.register_blueprint(auth.auth, url_prefix='/auth')
    with app.app_context():
        db.create_all()
        if not User.query.filter_by(username="cyy").first():
            user = User(
                username="cyy",
                phone_number="13967220273",
                level=1,
                stars=0
            )
            user.set_password("13967220273")
            db.session.add(user)
            db.session.commit()
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=9000, debug=True)
