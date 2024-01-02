const express = require("express");
const loginRoutes = express.Router();
// const bodyParser = require('body-parser');

const { authenticateUser } = require('../controllers/login.controllers');
const { addUser } = require('../controllers/login.controllers');
const { users } = require('../controllers/login.controllers');

// loginRoutes.use(bodyParser.json());



loginRoutes.get('/users', users);

loginRoutes.get('/addUser', addUser);

loginRoutes.post('/login', authenticateUser);

module.exports = loginRoutes;



