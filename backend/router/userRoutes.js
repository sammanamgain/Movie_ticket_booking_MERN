const express = require("express");
const router = express.Router();
const { sign_up, log_in, logout } = require("../controller/usercontroller");

router.route("/user/sign_up").post(sign_up);
router.route("/user/login").post(log_in);
router.route("/user/logout").get(logout);
module.exports = router;
