const userActions = require('../actions/user');

function login(request, response) {
  const { username, password } = request.body;
  if (!username || !password) return response
    .status(400)
    .json({ error: { message: 'username and password are required' } })
    .send();
  userActions.getAuthToken({ username, password })
    .then((token) => response.status(200).json({ token }).send())
    .catch((err) => response.status(401).json({ err: err.message }).send())
}

function userList(request, response) {
  const { limit, offset } = request.query;
  userActions.getUserList({ limit, offset })
    .then((users) => response.status(200).json(users).send())
}

function createUser(request, response) {
  const { username, password } = request.body;
  if (!username || !password) return response
    .status(400)
    .json({ error: { message: 'username and password are required' } })
    .send();
  userActions.createUser({ username, password })
    .then((user) => {
      response.status(201).json(user).send();
    })
    .catch((err) => {
      response.status(400).json({ error: err.message }).send();
    })
}
module.exports = {
  login,
  userList,
  createUser,
}
