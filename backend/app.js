const express = require("express");
const cookie_parser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
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
