const sendError = (error, req, res, next) => {
 
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Server Error";
  
  res
    .status(error.statusCode)
    .json({ success: false, message: error.message });
};
module.exports = sendError;
