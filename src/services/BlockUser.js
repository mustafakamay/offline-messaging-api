const Block = require("../models/BlockUser")

const blockUser = async (req,res) => {
    var user = req.decode["username"]
    const isblocked = await Block.findOne({ where: { blockedUser: req.body.blockedUser, blockerUser: user} });
    if (isblocked !=null ) return res.status(404).send({message: "User has already been blocked"})   
    if (!req.body.blockedUser) {
    res.status(400).send({
        status: false,
        message: 'blockerUser and blockedUser required!'
    });
} else {
    Block.create({
        blockerUser: user,
        blockedUser: req.body.blockedUser        
    }
    ).then((user) => res.status(201).send(user)).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
}
}

module.exports = {blockUser}