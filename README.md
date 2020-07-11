# admin_panel


### About
 This is a admin panel for mobile news client.


### Technology stack
When implementing this project, the following technology stack was used:

* OC Linux

* Node.js
* Express.js
* sqlite

* React.js
* redux.js


### Dev Run:
Follow these steps:

- clone this project to *your_directory*
- cd your_directiry
- cd frontend
+ Configure Frontend:
 - `echo REACT_APP_SERVER_URL=[url_Your_Backend_Server] >> .env` 
    example - `echo REACT_APP_SERVER_URL=http://127.0.0.1:5050 >> .env` 
- npm install
- npm start
- cd ..
- cd backend
+ Configure backend:
 - `echo SECRET_KEY=[your_Secret] >> .env`
 - `echo SERVER_PORT=5050 >> .env`
 - `echo ADMIN_USER=admin >> .env `
 - `echo ADMIN_PASS=admin >> .env`
- npm install
- npm start
- [Link](http://localhost:3000/)

### default authorization
* login - 'admin'
* password - 'admin'

### Licence
MIT




