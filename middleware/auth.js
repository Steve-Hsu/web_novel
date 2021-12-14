jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User')

// Protect Routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log('check req.headers', req.headers);
  console.log('check req.headers.authorization', req.headers.authorization);
  if (req.headers.authorization &&
    req.headers.authorization.startsWith('Haruki')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exists
  console.log('the token', token);
  if (!token) {
    return next(new ErrorResponse('Not authorize to access this route', 401));
  }

  try {
    // Verify token - decode the token with secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorize to access this route, token error', 401))
  }
})
