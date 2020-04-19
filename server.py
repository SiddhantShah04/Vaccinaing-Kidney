from flask import Flask,render_template,request,redirect,url_for,session,send_from_directory,send_file,jsonify
import json
app = Flask(__name__)


@app.route('/')
def index():
    
    return("Page not found")

@app.route('/login',methods=["Post"])
def login():
    res = request.get_json()
    username = "username"
    password = "passoward"
    print(res)
    return("done")

