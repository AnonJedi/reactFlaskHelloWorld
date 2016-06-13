from run import app
from flask import render_template


@app.route('/index', methods=['GET'])
def index():
    return render_template(
        'index.html', title='My title',  message='Hi')
