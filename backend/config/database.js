const mongoose = require("mongoose");
const connect = mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = connect;
