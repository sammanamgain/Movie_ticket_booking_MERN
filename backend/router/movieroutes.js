const express = require("express");
const { getAllMovies, createmovie } = require("../controller/moviecontroller");
const {auth,checkrole}=require("../middleware/auth")
const router = express.Router();


router.route("/movie/getall").get(auth,getAllMovies);
router.route("/movie/createmovie").post(auth,checkrole("admin"),createmovie);

module.exports = router;
