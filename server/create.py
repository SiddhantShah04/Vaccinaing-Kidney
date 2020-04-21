import os

from flask import Flask, render_template, request
from models import *

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://ppyqpbyslatwlt:e64c9c745d819f3b51de2ec2495a7c00e8001a13f94e42b690c948e9dc65272d@ec2-3-223-21-106.compute-1.amazonaws.com:5432/d8isusc5ccr4j6"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

def main():
    db.create_all()

if __name__ == "__main__":
    with app.app_context():
        main()