from flask import Flask

app = Flask(__name__)

from app.controller import index, login
import MySQLdb as db
from settings import db_credentials

connection = db.connect(db_credentials['host'], db_credentials['username'],
                        db_credentials['password'], db_credentials['db_name'])
