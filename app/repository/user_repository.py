from app.domain.user import User
from app.exception.repository_exception import RepositoryException
from sqlalchemy import func
import logging

log = logging.getLogger(__name__)


def is_user_exists(email, session):
    try:
        return session.query(func.count(User.id))\
            .filter_by(email=email).first()[0] != 0
    except Exception as e:
        err_msg = 'Error occurred while checking existing user with %s email' % \
                  email
        log.exception(err_msg)
        raise RepositoryException(err_msg)


def create_user(user, session):
    try:
        session.add(user)
        session.commit()
    except Exception as e:
        err_msg = 'Error occurred while creating new user with %s' % user
        log.exception(err_msg)
        raise RepositoryException(err_msg)


def fetch_user_by_email(email, session):
    try:
        return session.query(User).filter_by(email=email).first()
    except Exception as e:
        err_msg = 'Error occurred while fetching user with %s mail' % email
        log.exception(err_msg)
        raise RepositoryException(err_msg)
