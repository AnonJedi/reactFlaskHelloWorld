from flask import redirect, session, url_for
from functools import wraps


def login_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        if 'signedin' not in session:
            redirect(url_for('signin'), code=200)
        return func(*args, **kwargs)
    return decorated
