const ErrorResponse = require('../utils/errorResponse');
const Novel = require('../models/Novel')
const asyncHandler = require('../middleware/async')
const colors = require('colors');

//@desc    Get all novels
//@route   GET /api/v1/novels
//@access  Public
exports.getNovels = asyncHandler(async (req, res, next) => {
  const novels = await Novel.find();
  res.status(200).json({ success: true, count: novels.length, novels: novels })
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
