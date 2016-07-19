from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, func
from werkzeug.security import generate_password_hash, check_password_hash

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String)
    firstname = Column(String)
    lastname = Column(String)
    password = Column(String)
    gravatar = Column(String)
    registered_at = Column(DateTime, default=func.now())

    def __repr__(self):
        return '<User id=%s email=%s firstname=%s lastname=%s>' % \
               (self.id, self.email, self.firstname, self.lastname)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
