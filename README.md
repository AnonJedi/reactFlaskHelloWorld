#React and Flask Demo

####This is demo project with using react and flask

##Install requirements

All commands run from root of project

1. Pip installation:
```
    $ sudo apt-get install -y python-pip
```
2. Virtual environment installation:
```
    $ sudo pip install virtualenv
    $ virtualenv env
```
After installing virtual environment activate this
```
    $ . env/bin/activate
```
3. Installation flask
```
    $ pip install flask
```
4. For install npm follow this instruction https://docs.npmjs.com/getting-started/installing-node
After installation npm from root of project run command
```
    $ npm install
```
5. Installation MySQLdb
```
    $ pip install MySQL-python
```


##Install database

For installation MySQL run this:
```
    $ sudo apt-get install -y mysql-server
```

Than lets create database and user for it:
```
    $ mysql -uroot -ppassword
    > CREATE DATABASE react_flask_tutorial;
    > CREATE USER 'blog_user'@'localhost' IDENTIFIED BY 'blogpassword';
    > GRANT ALL PRIVILEGES ON react_flask_tutorial . * TO 'blog_user'@'localhost';
    > FLUSH PRIVILEGES;
```

##Setting up

In root of project must be _settings.py.template_ file. Copy it to project root and rename to _settings.py_.
After this open _settings.py_ and fill empty fields.

##Run the application
Activate virtual environment:
```
    $ . env/bin/activate
```
For start server run this command from project root:
```
    $ python runserver.py
```
For assembly static js files run this command from project root:
```
    $ npm run compile
```