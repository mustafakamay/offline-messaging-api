const cryptoPassword = require("crypto-js")
const {userCreate} = require("../services/User")
const passwordHash = (password) => {
    return cryptoPassword.HmacSHA1(password,process.env.PASSWORD_HASH)
}

module.exports = {passwordHash}