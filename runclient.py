#!env/bin/python

import os

static_path = os.path.join(os.path.dirname(__file__), 'app/static')
os.system('webpack %s %s' % (
    os.path.join(static_path, 'javascript/app.js'),
    os.path.join(static_path, 'bin/script.js')))