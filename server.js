const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

// Middleware
const logger = require('./middleware/logger')

// Route files
const novels = require('./routes/novels')

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Insert Middleware
app.use(logger)


// Home page
app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: "you are in homepage now" })
})

// Mount routers
app.use('/api/v1/novels', novels)



const PORT = process.env.PORT || 5000;


app.listen(PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on prot ${PORT}`.blue
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & exit process
  server.close(() => process.exit(1))
})