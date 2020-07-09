const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const omit = require('lodash/fp/omit');
const User = require('../db').User;

function getUserList({ limit = -1, offset = 0 }) {
  return User.findAll({ limit, offset })
    .then((users) => users.map(
      (user) => omit('password', user.toJSON())
    ))
}

function getAuthToken({ username, password }) {
  return getUserBy({ username, password }).then((user) => {
    return jwt.sign(
      { userId: user.id },
      process.env.SECRET_KEY,
      { algorithm: 'HS256' },
    );
  });
}

function createUser({ username, password }) {
  const hash = hashPasswort(password);

  return User.findOne({ where: { username, password: hash } })
    .then((user) => {
      if (user) throw new Error('User already exist');
      return User.create({ username, password: hash });
    })
    .then((user) => {
      return omit('password', user.toJSON());
    })
    ;
}

function getUserBy({ username, password }) {
  return User.findOne({ where: { username, password: hashPasswort(password) } })
    .then((user) => {
      if (!user) throw new Error('Wrong username or password');
      return user;
    });
}

function hashPasswort(password) {
  return CryptoJS.HmacSHA1(password, process.env.SECRET_KEY).toString();
}

function getUserByID(id) {
  return User.findByPk(id)
}

module.exports = {
  createUser,
  getAuthToken,
  getUserBy,
  getUserByID,
  getUserList,
};
