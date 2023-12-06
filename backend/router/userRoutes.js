const express = require("express");
const router = express.Router();
const { sign_up } = require("../controller/usercontroller");

router.route("/user/sign_up").post(sign_up);
module.exports = router;
