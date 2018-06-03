var router = require("express").Router();
var authRoutes = require("./auth");
//var headlineRoutes = require("./headlines");

router.use("/auth", authRoutes);
//router.use("/headlines", headlineRoutes);

module.exports = router;
