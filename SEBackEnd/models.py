from sqlalchemy import Enum
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


class Subject(db.Model):
    __tablename__ = 'subjects'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)


class ChineseHanzi(db.Model):
    __tablename__ = 'chinese_hanzi'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=1)
    difficulty = db.Column(Enum('easy', 'medium', 'hard'), nullable=False)
    content = db.Column(db.Text, nullable=False)

    subject = db.relationship('Subject', backref=db.backref('chinese_hanzi', lazy=True))


class ChinesePinyin(db.Model):
    __tablename__ = 'chinese_pinyin'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=1)
    name=db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255), nullable=True, default=None)
    audio_url = db.Column(db.String(255), nullable=True, default=None)

    subject = db.relationship('Subject', backref=db.backref('chinese_pinyin', lazy=True))


class MathResource(db.Model):
    __tablename__ = 'math_resources'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=2)
    type = db.Column(db.String(255), nullable=False)  # imgdata/imgdata_detail/imgdata_border/operators
    name = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255), nullable=True, default=None)
    audio_url = db.Column(db.String(255), nullable=True, default=None)
    pic_url = db.Column(db.String(255), nullable=True, default=None)
    text_url = db.Column(db.String(255), nullable=True, default=None)
    write_url = db.Column(db.String(255), nullable=True, default=None)
    audio_number_url = db.Column(db.String(255), nullable=True, default=None)

    subject = db.relationship('Subject', backref=db.backref('math_resources', lazy=True))


class Letters(db.Model):
    __tablename__ = 'letters'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=3)
    word_url = db.Column(db.String(255), nullable=False)
    write_url = db.Column(db.String(255), nullable=False)
    letter_url = db.Column(db.String(255), nullable=False)
    letter = db.Column(db.String(255), nullable=False)
    word= db.Column(db.String(255), nullable=False)

    subject = db.relationship('Subject', backref=db.backref('english_resources', lazy=True))


class WordThemes(db.Model):
    __tablename__ = 'word_themes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=3)
    theme = db.Column(db.String(255), nullable=False)
    url = db.Column(db.String(255), nullable=False)
    theme_url = db.Column(db.String(255), nullable=False)

    subject = db.relationship('Subject', backref=db.backref('words_themes', lazy=True))


class Words(db.Model):
    __tablename__ = 'words'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    theme_id = db.Column(db.Integer, db.ForeignKey('word_themes.id'), nullable=False)
    word = db.Column(db.String(255), nullable=False)
    word_url = db.Column(db.String(255), nullable=False)

    subject = db.relationship('WordThemes', backref=db.backref('words', lazy=True))

class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subject_id = db.Column(db.Integer, db.ForeignKey('subjects.id'), default=4)
    name = db.Column(db.String(255), nullable=False)
    url = db.Column(db.String(255), nullable=False)
    title_url = db.Column(db.String(255), nullable=False)
    audio_url = db.Column(db.String(255), nullable=False)

    subject = db.relationship('Subject', backref=db.backref('books', lazy=True))

class BookContent(db.Model):
    __tablename__ = 'books_content'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    order_id = db.Column(db.Integer, nullable=False)
    url = db.Column(db.String(255), nullable=False)
    audio_url = db.Column(db.String(255), nullable=False)
    book = db.relationship('Book', backref=db.backref('contents', lazy=True))
