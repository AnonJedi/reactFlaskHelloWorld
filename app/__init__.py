from flask import Flask
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from settings import db_credentials
from flask_wtf.csrf import CsrfProtect

app = Flask(__name__)
app.secret_key = 'super secret key'

CsrfProtect(app)

engine = create_engine('mysql://%s:%s@%s/%s' % (
    db_credentials['username'], db_credentials['password'],
    db_credentials['host'], db_credentials['db_name']))

db_session = sessionmaker(bind=engine)

from app.controller import index, entry
