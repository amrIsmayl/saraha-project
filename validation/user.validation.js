
// const joi = require('joi')
// const methods = ['body,params']

// const schema = {
//     body: joi.object({
//         name: joi.string().min(3).max(15).require(),
//         email: joi.string().email().required(),
//         password: joi.string().pattern(/^[a-zA-z0-9]{3,30}$/),
//         repassword: joi.ref('password'),
//         age: joi.number().min(16).max(50)
//     }),
//     params: joi.object({
//         id: joi.string().min(4).max(4)
//     })

// }


// const paramSchema =

//     module.exports.userVlidation = (req, res, next) => {
//         const msgArray = []

//         methods.map(() => {
//             const { error } = schema[key].validate(req[key], { abortEarly: false });
//             if (error) {
//                 error.details.map((msg) => {
//                     msgArray.push({ msg: msg.msgAkeyrray })
//                 })
               
//             } 
//         })

//         res.json(msgArray)

//     }

