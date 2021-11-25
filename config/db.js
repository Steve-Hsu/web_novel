const mongoose = require('mongoose');

// All method of mongoose return a promise, so we can use async directly

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL)
  console.log(
    `MongoDB Connected: ${conn.connection.host}`
  )
}

module.exports = connectDB;