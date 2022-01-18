const User = require("../models/User");
const Block = require("../models/BlockUser")
const Message = require("../models/Message")
const sequlize = require("../database/connection");

const messageCreate = async function(req, res) {
    var user = req.decode["username"]

    if(req.body["to"]===req.decode["username"]) return res.status(400).send({message:"You can't send messages to yourself"})



    const isFoundTo = await User.findOne({ where: { username: req.body.to } });

    if (isFoundTo===null) return res.status(404).send({message: "User not found"})
    const isblocked = await Block.findOne({ where: { blockedUser: user, blockerUser: req.body.to} });
    if (isblocked !=null ) return res.status(404).send({message: "You are blocked"})

    if (!req.body.to || !req.body.content) {
        res.status(400).send({
            status: false,
            message: 'Username and content required!'
        });
    } else {
        Message.create({
            from: user,
            to: req.body.to,
            content: req.body.content,
        }).then((user) => res.status(201).send(user)).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    }
}


const getUsersMessages = async (req,res) => {
    var user = req.decode["username"]
    var result = await Message.findAll({ where: {to :user }})
    console.log(result)
    if (result.length === 0) {
        res.status(404).send({
            message: 'Your inbox is empty'
        });
    } else {

        Message.findAll({ where: {to :user }}).then((user) => res.status(200).send(user))
                                        .catch((error) => {
            console.log(error);
            res.status(400).send({
                status: false,
                message: 'Something went wrong!'
            });
        });
    }
}

const getUsersMessagesBySender = async (req,res) => {
    var user = req.decode["username"]
    var result = await Message.findAll({ where: {to :user,from : req.params.sender}})
    if (result.length === 0 ) {
        res.status(404).send({
            message: 'Your inbox is empty'
        });
    } else {

        Message.findAll({ where: {to :user,from : req.params.sender}}).then((user) => res.status(200).send(user))
                                        .catch((error) => {
            console.log(error);
            res.status(400).send({
                status: false,
                message: 'Something went wrong!'
            });
        });
    }
}
module.exports = {messageCreate,getUsersMessagesBySender,getUsersMessages}