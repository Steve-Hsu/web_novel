const ErrorResponse = require('../utils/errorResponse');
const colors = require('colors')

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err.stack.red);
  console.log(err.name);

  // error - Mongoose bad ObjectId 
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`
    error = new ErrorResponse(message, 404);
    console.log(error.message.red)
  }

  // error - Duplicated key when create a novel
  if (err.code === 11000) {
    const message = 'Duplicated field value entered';
    error = new ErrorResponse(message, 400);
    console.log(error.message.red)
  }

  // error - Mongoose validation error heppens
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
    console.log(error.message.red)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error !!!'
  })
}

module.exports = errorHandler