const { signup, signin } = require('../services/user.service');
const { userVlidation } = require('../validation/user.validation');


const app = require('express').Router();


app.post('/signup/:id', userVlidation, signup);
app.post('/signin', signin);

module.exports = app


