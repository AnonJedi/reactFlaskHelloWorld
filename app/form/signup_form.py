from wtforms import Form, StringField, PasswordField, validators


class SignupForm(Form):
    email = StringField('email', [validators.Length(min=6, max=35)])
    firstname = StringField('firstname', [validators.DataRequired()])
    lastname = StringField('lastname', [validators.DataRequired()])
    password = PasswordField(
        'password', [validators.DataRequired(), validators.Length(min=6, max=35),
                     validators.EqualTo('repeat', message='Passwords not equals')])
    repeat = PasswordField('repeat')
