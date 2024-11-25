from main import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    stars = db.Column(db.Integer, default=0)

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