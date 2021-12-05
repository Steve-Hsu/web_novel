const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const fileupload = require('express-fileupload');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser')
// Middleware
const logger = require('./middleware/logger')

// Route files
const novels = require('./routes/novels');
const auth = require('./routes/auth');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie-parser
app.use(cookieParser());

// Insert Middleware
// Use logger only when developing environment
if (process.env.NODE_ENV === 'development') {
  app.use(logger)
}

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: "you are in homepage now" })
})

// Mount routers
app.use('/api/v1/novels', novels);
app.use('/api/v1/auth', auth);

// ErrorHandler, it must be after the routers, if you want it operates during error happens in routes.
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on prot ${PORT}`.bold.green
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & exit process
  server.close(() => process.exit(1))
})