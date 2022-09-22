const userModel=require('../models/user.model')

module.exports.signup= async(req,res)=>{
    const {name ,email , password , age} = req.body
    await userModel.insertMany({name ,email , password , age})
    res.json({message:'success'})
}


module.exports.signin = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email })
    if (user) {
        // const match = await bcrypt.compare(password, user.password);
        if (password == user.password) {
            // let token = jwt.sign({role : 'user' , userid : user._id , name : user.name}, 'amr');
            res.json({ message: "success", token })
        } else {
            res.json({ message: "password incorrect" })
        }
    } else {
        res.json({ message: "email dose't exist" })
    };
};