const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: "Movie",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  showtime: {
    type: Date,
    required: true,
  },
  seatNumber: {
    type: Number,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
