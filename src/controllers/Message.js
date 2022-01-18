// const User = require("../models/User");
// const Message = require("../models/Message")
// const {messageCreate} = require("../services/Message")
// const message = (req,res) => {
//     const isFoundFrom =  User.findOne({ where: { username: req.body.from } });
//     const isFoundTo =  User.findOne({ where: { username: req.body.to } });

//     if (isFoundFrom === null || isFoundTo===null) return res.status(404).send({message: "User not found"})
//     else {
//          messageCreate(req.body).then((user)=>{
//             res.status(200).send(user);
//         })
//         .catch((e)=> res.status(500).send(user))
//     }
//       }

// module.exports = {message}