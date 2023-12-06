const express = require("express");
const cookie_parser = require("cookie-parser");
const app = express();
const userrouter = require("./router/userRoutes.js");
const customError = require("./middleware/customError.js");
app.use(express.json());
app.use(cookie_parser())
app.use("/api/v1", userrouter);

app.use(customError);
module.exports = app;
