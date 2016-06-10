FROM tutum/ubuntu:latest

RUN apt-get -y update
RUN apt-get install -y python-dev python-pip libffi-dev libssl-dev git nano
RUN pip install Flask riak
RUN pip install -U setuptools	
RUN git clone https://github.com/basho/riak-python-client.git
RUN cd riak-python-client && python setup.py install