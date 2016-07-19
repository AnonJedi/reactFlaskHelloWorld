class RepositoryException(Exception):
    def __init__(self, message):
        super(RepositoryException, self).__init__(message)
