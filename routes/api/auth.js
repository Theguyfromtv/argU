var router = require("express").Router();
var authController = require("../../controllers/auth");

router.get("/facebook", authController.facebook)
router.get("/facebook/callback", authController.facebookResponse)
router.get("/twitter", authController.twitter)
router.get("/twitter/callback", authController.twitterResponse)

module.exports = router;
