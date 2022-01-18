const express = require('express');
const {userCreate,userFind,getToken} = require('../services/User')
const {blockUser} = require('../services/BlockUser')
const {checkDuplicateUserName} = require('../middlewares/verifySignUp')
const {verifyToken} = require('../middlewares/verifyJwtToken')
const router = express.Router();


router.get('/list',verifyToken,userFind);

router.post('/create',checkDuplicateUserName,userCreate);
router.post('/getToken', getToken)
router.post('/blockUser',verifyToken,blockUser)


module.exports = {
    router,
}