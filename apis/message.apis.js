const { auth } = require('../middleware/authentiction/auth');
const { addmessage, getMsgs } = require('../services/message.service');


const app =require('express').Router();


app.post('/', addmessage);
app.get('/',auth, getMsgs);

module.exports = app



