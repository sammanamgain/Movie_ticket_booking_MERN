const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  showtimes: [
    {
      type: Date,
      required: true,
    },
  ],
  availableSeats: {
    type: Number,
    required: true,
  },
  url:{
    type:String,
    required:true,
  }
});
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
