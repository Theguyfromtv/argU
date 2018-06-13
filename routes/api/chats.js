var router = require("express").Router();
var chatController = require("../../controllers/conversation");

router.get('/all/:id',chatController.getMessages)

router.post('/sendmessage', chatController.sendMessage)

router.post('/read1', chatController.read1)

router.post('/read2', chatController.read2)

module.exports = router;
