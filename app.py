from flask import Flask
from database import db
from models import User
import pymysql
pymysql.install_as_MySQLdb()

from seed_data import insert_subjects, insert_chinese_hanzi, insert_chinese_pinyin, insert_math_resources, \
    insert_letters, insert_themes, insert_words, insert_picture_books

def seed_data():
    insert_subjects()
    insert_chinese_hanzi()
    insert_chinese_pinyin()
    insert_math_resources()
    insert_letters()
    insert_themes()
    insert_words()
    insert_picture_books()
    
def create_app(*args, **kwargs):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://dandan:123456@localhost/se_project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    UPLOAD_FOLDER = './uploads'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
    db.init_app(app)
    import tts
    import math_learning
    import checkin
    import auth
    import sketch
    app.register_blueprint(tts.bp, url_prefix='/tts')  # 注册路由
    app.register_blueprint(math_learning.bp, url_prefix='/math')
    app.register_blueprint(checkin.bp, url_prefix='/checkin')
    app.register_blueprint(auth.bp, url_prefix='/auth')
    app.register_blueprint(sketch.bp, url_prefix='/sketch')
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
        seed_data()
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=8000, debug=True)
