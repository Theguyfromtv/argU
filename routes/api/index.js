const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");
const chatRoutes = require('./chats')

router.use("/auth", authRoutes);
router.use('/chats',chatRoutes)
router.use("/login", userRoutes);

module.exports = router;
