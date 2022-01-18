const express = require('express');
const {messageCreate,getUsersMessagesBySender,getUsersMessages} = require('../services/Message')
// const {message} = require('../controllers/Message')
// const {message} = require('../middlewares/message')
const {blockUser} = require('../services/BlockUser')
const {checkDuplicateUserName} = require('../middlewares/verifySignUp')
const {verifyToken} = require('../middlewares/verifyJwtToken')
const router = express.Router();



router.post('/create',verifyToken,messageCreate);
router.get('/allMessagesBySender/:sender',verifyToken,getUsersMessagesBySender);
router.get('/allMessages',verifyToken,getUsersMessages);


module.exports = {
    router,
}