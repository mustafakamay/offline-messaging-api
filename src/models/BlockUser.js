const sequlize = require("../database/connection")
const { Sequelize, Model, DataTypes } = require("sequelize");

const BlockUser = sequlize.define("blockuser", {
    blockerUser: {
        type : Sequelize.STRING
                },
    blockedUser:{
        type : Sequelize.STRING
                },
    },{
        createdAt: true,
        updatedAt: false
    });

module.exports = BlockUser;