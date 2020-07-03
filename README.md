#### Welcome to Fast Shopping! ####

## Steps to run app: ##

If you don't have PostgreSQL installed:
1) Go to http://postgresapp.com/ including CLI psql, configure your $PATH https://postgresapp.com/documentation/cli-tools.html
2) Or follow next steps on command line:
* $ sudo apt-get install postgresql postgresql-contrib
* $ sudo -u postgres createuser --superuser $USER
* $ createdb $USER


Else if you already have it: 
From command line: 
* $ createdb fast_shopping

cd /back:
* $ npm i && node seed.js && npm start

cd /front:
* $ npm i && npm run build

Open http://localhost:3000/