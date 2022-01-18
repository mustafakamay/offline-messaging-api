const User = require("../models/User")
const sequlize = require("../database/connection");
const router = require('express').Router();
const jwt = require("jsonwebtoken");
const userCreate =  async function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            status: false,
            message: 'Username and password required!'
        });
    } else {
        User.create({
            username: req.body.username,
            password: req.body.password,
        }).then((user) => res.status(201).send({success: true,message:"User signup successfully"})).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    }
}

const userFind = function(req, res) {
    if (!req.body.username ) {
        res.status(400).send({
            status: false,
            message: 'Username required!'
        });
    } else {

        User.findOne({ where: {username :req.body.username }}).then((user) => res.status(200).send(user))
                                        .catch((error) => {
            console.log(error);
            res.status(400).send({
                status: false,
                message: 'Something went wrong!'
            });
        });
    }
}

const getToken = async (req,res) => {
    const isUser = await User.findOne({ where: { username: req.body.username } });
    if (isUser === null) return res.status(404).send({message: "User not found"})
    const isPassword = await User.findOne({ where: { username: req.body.username  } });
    if (isPassword.password != req.body.password) return res.status(404).send({message: "Your password does not match"})
    const {username,password} = req.body;
    const payload = {
        username,password
    }
    const token = jwt.sign(payload,process.env.ACCESS_TOKEN_KEY,{ expiresIn: "1w" })
    res.json({

        status: true,
        token
    });
}



module.exports = {userCreate,userFind,getToken}