const sequlize = require("../database/connection")
const { Sequelize, Model, DataTypes } = require("sequelize");
const User = require("../models/User")

const Message = sequlize.define("message", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    from: {
        type : Sequelize.STRING
                },
    to:{
        type : Sequelize.STRING
                },
    content:{
        type : Sequelize.STRING
                },
    },{
        createdAt: true,
        updatedAt: false
    });

Message.hasOne(User, {
    foreignKey: {
        name: 'from'
    }
    });

Message.hasOne(User, {
    foreignKey: {
        name: 'to'
    }
    });
module.exports = Message;