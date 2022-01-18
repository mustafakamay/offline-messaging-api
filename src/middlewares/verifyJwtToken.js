const jwt = require('jsonwebtoken');


 
const verifyToken = (req, res, next) => {
    const token = req.headers["access-token"];
    if (!token)
        res.send("Token not found.");
    else {
        jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
            if (error)
                res.status(403).send("Verification could not be completed");
            else {
                req.decode = decoded;

                next();
            }
        });
    }
};

module.exports = {verifyToken}