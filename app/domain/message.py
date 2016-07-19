from app.domain.user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship, backref

Base = declarative_base()


class Message(Base):
    __tablename__ = 'message'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    address_to = Column(Integer, ForeignKey('user.id'))
    created = Column(DateTime, default=func.now())
    title = Column(String)
    message = Column(String)
    deleted = Column(DateTime, default=None)

    user = relationship(User, backref=backref(
        'messages', uselist=True, cascade='delete,all'))

    def __repr__(self):
        return '<Message id=%s user_id=%s address_to=%s>' % \
               (self.id, self.user_id, self.address_to)
