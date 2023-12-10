
const Booking = require("../models/ticketmodel.js");
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");

exports.book = catchAsync(async (req, res, next) => {
  console.log("is this route called")
  const user = req.user.id;
    const movie = req.params.id;
    console.log(movie);
    console.log(req.body);
  const { showtime, seatNumber } = req.body;
  const prev = await Booking.findOne({ movie, seatNumber});
  

  if (prev) {
      const number = prev.seatNumber;
      console.log(number);
      console.log(seatNumber);
      
     console.log(1)
      if (number === seatNumber) {
          if (prev.user.valueOf() === user)
          {
              console.log(2)
              return next(new Error (400,"This seat is already Booked By you"))
          }
          console.log(3)
      return next(new Error(400, "Booking is already occupied by another customer"));
    }
    }
    console.log(4)

  const data = await Booking.create({ movie, user, showtime, seatNumber });
  if (!data) {
    return next(new Error(400, "Failed to create the movie"));
  }
  res.status(201).json({
    success: true,
    data,
  });
});
