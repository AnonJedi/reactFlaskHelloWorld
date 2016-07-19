from app import app
from app.exception.service_exception import ServiceException
from app.form.signin_form import SigninForm
from app.service import user_service
from flask import render_template, request, abort, session
from app.form.signup_form import SignupForm
import logging

log = logging.getLogger(__name__)


@app.route('/signin')
@app.route('/signup')
@app.route('/')
def render_login():
    return render_template('entry.html')


@app.route('/signin', methods=['POST'])
def check_login():
    form = SigninForm(request.form)
    try:
        if user_service.login_user(form):
            session['signedin'] = True
            return render_template('index.html')
        else:
            return False
    except ServiceException as e:
        abort(500, error=e.message)


@app.route('/signup', methods=['POST'])
def signup_user():
    form = SignupForm(request.form)
    try:
        user_service.register_user(form)
        return render_template('entry.html')
    except ServiceException as e:
        abort(500, error=e.message)
