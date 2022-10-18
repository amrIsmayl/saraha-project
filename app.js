
const express = require('express')
const { default: mongoose } = require('mongoose')
const { runDB } = require('./DB/config')
const app = express()
require('dotenv').config()
const port = process.env.port

app.use(express.json());
app.use('/users', require('./apis/user.apis'));
app.use('/messages', require('./apis/message.apis'));


runDB();

app.get('/', (req, res) => res.send('Hello World!'));

app.all("*", (req,res) =>{
    res.json({message:"404"})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))