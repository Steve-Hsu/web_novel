const mongoose = require('mongoose');

const NovelSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Please add a title'],
    unique: true,
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  slug: String,
  content: {
    type: String,
    require: [true, 'Please add a content'],
  },
  photo: {
    // Just save the URL of the photo
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Novel', NovelSchema);