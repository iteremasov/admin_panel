const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const userControllers = require('./controllers/user');
const userActions = require('./actions/user');

class Main {
  constructor(app) {
    if (!app) throw 'app is undefined';
    this.app = app;
  }

  init(callback) {
    try {
      this.app.use(cors());
      this.app.use(helmet());
      this.app.use(bodyParser.json());
      this.app.use(morgan('combined'));
      this.app.post('/login', userControllers.login);
      this.app.use((request, response, next) => {
        const tokenData = request.headers.authorization;
        const [pref, token] = tokenData ? tokenData.split(' ') : [];

        if (pref === 'Bearer' && token) {
          const decoded = jwt.verify(token, process.env.SECRET_KEY);

          return userActions.getUserByID(decoded.userId)
            .then((user) => {
              if (!user) return response.status(401).json({ error: 'Authorization required' });
              request.user = user;
              next()
            })
        }
        return response.status(401).json({ error: 'Authorization required' });
      });

      this.app.get('/users', userControllers.userList);
      this.app.post('/users', userControllers.createUser);
      this.app.delete('/users', userControllers.deleteUser)

      callback();
    } catch (e) {
      callback(e);
    }
  }
}
module.exports = Main;
