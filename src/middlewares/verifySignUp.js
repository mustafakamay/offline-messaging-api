const User = require("../models/User");

checkDuplicateUserName = (req,res,next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send("Username is already taken!");
            return;
        }
        next();
    })
}

module.exports = {checkDuplicateUserName}