const JWT = require("jsonwebtoken")

const accessToken = (user) => {
    return JWT.sign(user, process.env.ACCESS_TOKEN_KEY, {expiresIn: "1w"})
}

module.exports = {
    accessToken
}