require('dotenv').config();
const app = require('express')();
const Main = require('./src/main');
const sequelize = require('./src/db').sequelize;
const userActions = require('./src/actions/user');
const main = new Main(app);

main.init(err => {
  if (err) console.log('error init', err);
});

sequelize.sync()
  .then(() => {
    return userActions.createUser({ username: process.env.ADMIN_USER, password: process.env.ADMIN_PASS })
      .catch((err) => console.log('admin user already created', err))
  })
  .then(() => {
    console.log('database is ready');
    app.listen(process.env.SERVER_PORT, err => {
      if (err) console.log('error start');
      else console.log('start port = ' + process.env.SERVER_PORT);
    });
  });
