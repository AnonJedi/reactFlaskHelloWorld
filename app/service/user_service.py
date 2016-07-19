from app import db_session
from app.domain.user import User
from app.exception.repository_exception import RepositoryException
from app.exception.service_exception import ServiceException
from app.repository.user_repository import is_user_exists, create_user, \
    fetch_user_by_email
import logging

log = logging.getLogger(__name__)


def register_user(user_data):
    user = None
    try:
        session = db_session()
        if is_user_exists(user_data.email.data, session):
            raise ServiceException('User is already exists')
        user = User(email=user_data.email.data,
                    firstname=user_data.firstname.data,
                    lastname=user_data.lastname.data)
        user.set_password(user_data.password.data)
        create_user(user, session)
        session.close()
    except RepositoryException as e:
        err_msg = 'Error with creation of user'
        log.exception(err_msg)
        raise ServiceException(err_msg)
    except Exception as e:
        err_msg = 'Error occurred while trying create user with %s' % user
        log.exception(err_msg)
        raise ServiceException('Error with creation of user')


def login_user(user_data):
    try:
        session = db_session()
        db_user = fetch_user_by_email(user_data.email.data, session)
        session.close()
        is_signed_up = False
        if db_user.check_password(user_data.password.data):
            is_signed_up = True
        return is_signed_up
    except RepositoryException as e:
        raise ServiceException(e)
    except Exception as e:
        err_msg = 'Error with handling %s user' % user_data
        log.exception(err_msg)
        raise ServiceException(err_msg)
