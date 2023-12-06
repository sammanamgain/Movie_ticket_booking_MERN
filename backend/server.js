const dotenv = require("dotenv");
dotenv.config();
const app = require("./app.js");
const database=require("./config/database.js");


app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.port);
})