const sequlize = require("../database/connection")
const { Sequelize, Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt-nodejs")
const User = sequlize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type : Sequelize.STRING
                },
    password:{
        type : Sequelize.STRING
                },
    },{
        createdAt: true,
        updatedAt: false
    }
    );

module.exports = User;

