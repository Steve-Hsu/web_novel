const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const Novel = require('../models/Novel')
const asyncHandler = require('../middleware/async')
const colors = require('colors');

//@desc    Get all novels
//@route   GET /api/v1/novels
//@access  Public
exports.getNovels = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFileds and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  // Create Query String
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)/g, match => `$${match}`);

  // Finding resource
  query = Novel.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query.select(fields)
  }

  // Sort Fields
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    // Sort by filed "createdAt", the minus sign "-", means descending by its value.
    query = query.sort('-createdAt')
  }

  // Pagination
  // Default page to return, in here we set page 1 as default to return to client
  const page = parseInt(req.query.page, 10) || 1;
  // Default how many data in 1 page, 
  const limit = parseInt(req.query.limit, 10) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Novel.countDocuments();

  // I forget what this line doing.
  query = query.skip(startIndex).limit(limit);

  // Executing our query
  const novels = await query;

  // Pagination result
  const pagination = {};

  // Only if data have previous page or next page then show the previous page or next page.
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    }
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    }
  }

  const result = { success: true, count: novels.length, pagination, novels: novels }

  // console.log("result", result)
  res.status(200).json(result)
})

//@desc    Get a novel
//@route   GET /api/v1/novels/:id
//@access  Public
exports.getNovel = asyncHandler(async (req, res, next) => {
  const novel = await Novel.findById(req.params.id);
  if (!novel) {
    next(new ErrorResponse(`Novel not found with id of ${req.params.id}`))
  }
  res.status(200).json({ success: true, novel: novel });
})

//@desc    Create novel
//@route   POSTs /api/v1/novels/addnovel
//@access  Private
exports.createNovel = asyncHandler(async (req, res, next) => {
  const novels = await Novel.create(req.body)
  // res.send(req.body)
  res.status(201).json({
    success: true,
    data: novels
  })
})

//@desc    Update novel
//@route   PUT /api/v1/novels/:id
//@access  Private
exports.updateNovel = asyncHandler(async (req, res, next) => {
  const novel = await Novel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if (!novel) {
    return res.status(400).json({ success: false })
  }
  res.status(200).json({ success: true, data: novel })
})

//@desc    Delete novel
//@route   DELETE /api/v1/novels/:id
//@access  Private
exports.deleteNovel = asyncHandler(async (req, res, next) => {
  const novel = await Novel.findByIdAndDelete(req.params.id)
  if (!novel) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
})

//@desc    Upload photo for novel
//@route   GET /api/v1/novels/:id/photo
//@access  Private
exports.novelPhotoUpload = asyncHandler(async (req, res, next) => {
  console.log("upload img start".yellow)
  const novel = await Novel.findById(req.params.id);
  if (!novel) {
    return next(new ErrorResponse(`novel not found with id of ${req.params.id}`, 404));
  };

  if (!req.files) {
    return next(new ErrorResponse('Please upload a file', 400));
  }

  const file = req.files.File;
  // console.log("file", file)

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image/png")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  };

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 404));
  };

  // Create custom filename
  // This part prevent photo with same filename and be overwrite.
  file.name = `photo_${novel._id}${path.parse(file.name).ext}`; // .ext will get the file extention

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500))
    }
    await Novel.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({
      success: true,
      data: file.name
    })
  })
})