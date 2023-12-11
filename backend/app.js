const express = require("express");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
const corsOptions = {
  origin: "https://movie-react-eq03.onrender.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
const app = express();
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:3000",
    "http://gamebrag.onrender.com",
    "https://gamebrag.onrender.com",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});




//app.use(cors());
const userrouter = require("./router/userRoutes.js");
const movierouter = require("./router/movieroutes.js");
const customError = require("./middleware/customError.js");
app.use(express.json());
app.use(cookie_parser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/v1", userrouter);
app.use("/api/v1", movierouter);
app.use(customError);
module.exports = app;
