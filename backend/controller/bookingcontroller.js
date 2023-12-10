const User = require("../models/usermodel");
const Movie = require("../models/movielist.js");
const Booking = require("../models/ticketmodel.js");
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");
const customError = require("../middleware/customError.js");

exports.book = catchAsync(async (req, res, next) => {
  const user = req.user.id;
  const movie = req.params.id;
  const { showtime, seatNumber } = req.body;
  const prev = await Booking.findOne({ movie });
  

  if (prev) {
      const number = prev.seatNumber;
      
    
      if (number === seatNumber) {
          if (prev.user.valueOf() === user)
          {
              
              return next(new Error (400,"This seat is already Booked By you"))
            }
      return next(new Error(400, "Booking is already occupied by another customer"));
    }
  }

  const data = await Booking.create({ movie, user, showtime, seatNumber });
  if (!data) {
    return next(new Error(400, "Failed to create the movie"));
  }
  res.status(201).json({
    success: true,
    data,
  });
});
