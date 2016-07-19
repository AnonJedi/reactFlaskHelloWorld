from app import app
from flask import render_template
from app.service.auth_service import login_required


@app.route('/index')
@app.route('/')
@login_required
def index():
    return render_template('index.html', title='React and Flask SPA')
