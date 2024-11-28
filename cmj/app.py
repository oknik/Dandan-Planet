# app.py
from flask import Flask
from models import db
from auth import auth

app = Flask(__name__)

# 数据库配置
# 连接到实际的 mysql 数据库，这个。。实际用的时候把用户名密码什么的改了
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Smartdede666@localhost/sketch'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 注册登录蓝图注册
app.register_blueprint(auth, url_prefix='/auth')

# 将 SQLAlchemy 数据库实例与 Flask 应用关联起来
db.init_app(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
