const sendError = (error, req, res, next) => {
  error.statuscode = error.statuscode || 500;
  error.message = error.message || "Server Error";
  res.status(error.statuscode).json({ success: false, message: error.message });
  next();
};
module.exports = sendError;