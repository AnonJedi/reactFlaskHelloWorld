from wtforms import Form, StringField, PasswordField, validators


class SigninForm(Form):
    email = StringField('email', [validators.Length(min=6, max=35)])
    password = PasswordField('password', [validators.DataRequired()])
