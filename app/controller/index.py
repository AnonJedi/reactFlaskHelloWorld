import json

from app import app
from flask import render_template, session, url_for, redirect
from app.service.auth_service import login_required


@app.route('/')
@login_required
def index():
    return render_template('index.html')


@app.route('/logout', methods=['POST'])
@login_required
def logout():
    del session['signedin']
    return json.dumps({'success': True})
