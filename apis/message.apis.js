const { addmessage, getMsgs } = require('../services/message.service');


const app =require('express').Router();


app.post('/', addmessage);
app.get('/', getMsgs);

module.exports = app



