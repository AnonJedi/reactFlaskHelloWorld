from flask import redirect, session, url_for
from functools import wraps


def login_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        if 'signedin' not in session:
            return redirect(url_for('render_login'))
        return func(*args, **kwargs)
    return decorated
