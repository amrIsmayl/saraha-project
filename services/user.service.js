const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports.signup = async (req, res) => {
    const { name, email, password, age } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "account already exists" })
    } else {
        bcrypt.hash(password, 5, async function (err, hash) {
            await userModel.insertMany({ name, email, password: hash, age })
            res.json({ message: 'success' });
        });

    }
};


module.exports.signin = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            let token = jwt.sign({userId:user._id,name:user.name,emailConfirm:user.emailConfirm}, 'amr');
            res.json({ message: "success" ,token})
        } else {
            res.json({ message: "password incorrect" })
        }
    } else {
        res.json({ message: "email dose't exist" })
    };
};