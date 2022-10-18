const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { sendEmail } = require('../email/user.email');
const { use } = require('../apis/user.apis');



module.exports.signup = async (req, res) => {
    const { name, email, password, age } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "account already exists" })
    } else {
        bcrypt.hash(password, 5, async function (err, hash) {
            await userModel.insertMany({ name, email, password: hash, age })
            let token = jwt.sign({ email }, 'amr', { expiresIn: 60 })
            sendEmail({ email, token, message: 'hello' });
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
            let token = jwt.sign({ userId: user._id, name: user.name, emailConfirm: user.emailConfirm }, 'amr');
            if (user.emailConfirm == true) {
                res.json({ message: "success", token })
            } else {
                res.json({ message: "verify your email first" })
            }
        } else {
            res.json({ message: "password incorrect" })
        }
    } else {
        res.json({ message: "email dose't exist" })
    };
};


module.exports.emailVerify = async (req, res) => {

    const { token } = req.params;
    jwt.verify(token, 'amr', async (err, decoded) => {
        if (err) {
            res.json(err)
        } else {
            let user = await userModel.findOne({ email: decoded.email })
            if (user) {
                await userModel.findOneAndUpdate({ email: decoded.email }, { emailConfirm: true })
                res.json({ message: "verifyed" });
            } else {
                res.json({ message: "user not found" });
            }
        }
    })


}



