const { signup, signin, emailVerify } = require('../services/user.service');
const { userVlidation } = require('../validation/user.validation');


const app = require('express').Router();


app.post('/signup', signup);
app.post('/signin', signin);
app.get('/verify/:token', emailVerify);

module.exports = app


