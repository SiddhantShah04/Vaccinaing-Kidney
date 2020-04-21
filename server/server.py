from flask import Flask,render_template,request,redirect,url_for,session,send_from_directory,send_file,jsonify
import json

from models import *
from sqlalchemy.sql import func

app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://ppyqpbyslatwlt:e64c9c745d819f3b51de2ec2495a7c00e8001a13f94e42b690c948e9dc65272d@ec2-3-223-21-106.compute-1.amazonaws.com:5432/d8isusc5ccr4j6"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
app.secret_key = "f*"


app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():    
    return("Page not found")

@app.route("/signUp",methods=["Post"])
def signUp():
    #E and p should to taken form user
    res = request.get_json()
    print(res) 
    try:
        Resgistrated = Registration(FullName=res['fullName'],Email=res['Email'],Password=res['Password'],contactNumber=res['contactNumber'],age=res['age'],Gender=res['gender'])
        db.session.add(Resgistrated)
        db.session.commit()
    except:
        return("Account with this Email id already exist")
    return("ok")

@app.route('/login',methods=["Post"])
def login():
    
    res = request.get_json()
    E = res["Email"]
    P = res["Password"]
    print(res)
    result = Registration.query.filter_by(Password=P,Email=E).first()
    if(result != None):
        return("ok")
    return("Invalid Email or Password")

