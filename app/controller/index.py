from run import app
from flask import render_template


@app.route('/', methods=['GET'])
def index():
    print 1
    return render_template(
        'index.html', title='My title',  message='Hi')
