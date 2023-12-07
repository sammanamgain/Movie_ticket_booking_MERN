const User = require("../models/usermodel");
const Movie=require("../models/movielist.js")
const catchAsync = require("../middleware/catchAsync");
const Error = require("../utils/Error");
const customError = require("../middleware/customError.js");

//get all the movies
exports.getAllMovies = catchAsync(async (req, res, next) => {
    const movielist = await Movie.find();
    res.status(200).json({
        success: true,
        movielist
    })
})

//create a movie listing 
exports.createmovie = catchAsync(async (req, res, next) => {
    const { title, genre, showtimes, availableSeats } = req.body;

    
    const movie = await Movie.create({
      title,
      genre,
      showtimes,
      availableSeats,
    });
    if (!movie)
    {
        res.status(404).json({
            success: false,
            message:"Failed to create a movie"
        })
    }
    res.status(201).json({
        success: true,
        message:"Movie created successfully"
    })
})