const express = require("express");
const { getAllMovies, createmovie } = require("../controller/moviecontroller");
const { book } = require("../controller/bookingcontroller");
const {auth,checkrole}=require("../middleware/auth")
const router = express.Router();


router.route("/movie/getall").get(auth,getAllMovies);
router.route("/movie/createmovie").post(auth,checkrole("admin"),createmovie);
router.route("/movie/booking/:id").post(auth,book)
module.exports = router;
