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
  let { limit, offset } = request.query;
  limit = limit || 20;
  offset = offset || 0;
  userActions.getUserList({ limit, offset })
    .then((users) => response.status(200).json(users).send())
    .catch((error) => response.status(400).json({error: error}))
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

function deleteUser(request, response) {
  console.log('sdf')
  const { username, password } = request.body;
  if (!username || !password) return response
    .status(400)
    .json({ error: { message: 'username and password are required' } })
    .send();
  userActions.deleteUser({ username, password })
    .then(() => {
      response.status(201).send();
    })
    .catch((err) => {
      response.status(400).json({ error: err.message }).send();
    })
}
module.exports = {
  login,
  userList,
  createUser,
  deleteUser,
}
