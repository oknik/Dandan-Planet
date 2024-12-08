from werkzeug.security import generate_password_hash, check_password_hash
from database import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    stars = db.Column(db.Integer, default=0)
    password_hash = db.Column(db.String(128), nullable=False)
    phone_number = db.Column(db.String(11), unique=True, nullable=False)
    avatar = db.Column(db.String(255), default='https://pic.imgdb.cn/item/6728b79dd29ded1a8cd25236.jpg')
    level = db.Column(db.Integer, default=1)

    # 密码转为哈希值存储
    def set_password(self, password):
        self.password_hash = generate_password_hash(password, method='pbkdf2:sha256')

    # 验证密码
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.username}, Stars: {self.stars}>'


class Checkin(db.Model):
    __tablename__ = 'checkins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    sign_in_date = db.Column(db.Date, nullable=False)

    user = db.relationship('User', backref=db.backref('checkins', lazy=True))

    def __repr__(self):
        return f'<Checkin User ID: {self.user_id}, Date: {self.sign_in_date}>'


# 孩子信息？
class Child(db.Model):
    __tablename__ = 'child'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    birthdate = db.Column(db.Date, nullable=False)
    gender = db.Column(db.Enum('male', 'female'), nullable=False)
    user = db.relationship('User', backref='child', lazy=True)


# 短信验证码信息，连接数据库存放
class VerificationCode(db.Model):
    __tablename__ = 'verification_code'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    phone_number = db.Column(db.String(11), unique=True, nullable=False)
    code = db.Column(db.String(6), nullable=False)
    expiry_time = db.Column(db.Integer, nullable=False)

