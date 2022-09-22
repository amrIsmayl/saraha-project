const messageModel = require("../models/message.model");

module.exports.addmessage= async (req,res) => {
    const { name , userId} = req.body;
await messageModel.insertMany({name, userId});
res.json({message:'success'});
};

module.exports.getMsgs = async (req,res) => {
    const {userId} = req.body;
    let messages = await messageModel.find({userId},{name:1,_id:0});
    res.json({message : "success" , messages});
};

