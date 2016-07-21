from wtforms import StringField, PasswordField, validators
from flask.ext.wtf import Form


class SigninForm(Form):
    email = StringField('email', [validators.Length(min=6, max=35)])
    password = PasswordField('password', [validators.DataRequired()])
