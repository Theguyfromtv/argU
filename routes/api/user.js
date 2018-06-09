var router = require("express").Router();
var userController = require("../../controllers/user");


router.get('/:id', userController.login)

router.post('/topics',userController.updateTopics)

router.get('/topics', userController.getTopics)




module.exports=router