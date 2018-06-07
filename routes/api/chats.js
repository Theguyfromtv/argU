var router = require("express").Router();
var chatController = require("../../controllers/conversation");

router.get('/all/:id',chatController.getMessages)

router.post('/sendmessage', chatController.sendMessage)

module.exports = router;
