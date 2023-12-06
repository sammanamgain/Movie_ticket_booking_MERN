const express = require('express');
const router = express.Router();
const {sign_up}=require('../controller/usercontroller')
router.route("/sign_up").post()