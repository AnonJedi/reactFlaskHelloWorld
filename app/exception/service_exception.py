class ServiceException(Exception):
    def __init__(self, message):
        super(ServiceException, self).__init__(message)
