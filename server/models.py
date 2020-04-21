from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Registration(db.Model):
    __tablename__ = "Registration"
    FullName = db.Column(db.String,nullable=False)
    Email = db.Column(db.String, nullable=False,primary_key=True)
    contactNumber = db.Column(db.Integer,nullable=False)
    age = db.Column(db.Integer,nullable=False)
    Password = db.Column(db.String, nullable=False)
    Gender = db.Column(db.String, nullable=False)
