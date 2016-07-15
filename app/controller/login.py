from app import app
from flask import render_template, request


@app.route('/login')
@app.route('/')
def render_login():
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def check_login():
    form = request.form
    return render_template('index.html', title='React and Flask SPA')
