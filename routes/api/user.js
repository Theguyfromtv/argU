var router = require("express").Router();
var userController = require("../../controllers/user");


router.get('/argumentuser/:id', userController.login)

router.post('/topics',userController.updateTopics)


module.exports=router