const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");
const chatRoutes = require('./chats')

router.use("/api/auth", authRoutes);
router.use('/api/chats',chatRoutes)
router.use("/api", userRoutes);

module.exports = router;
