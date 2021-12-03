const Novel = require('../models/Novel')
const colors = require('colors');

//@desc    Get all novels
//@route   GET /api/v1/novels
//@access  Public
exports.getNovels = async (req, res, next) => {
  try {
    const novels = await Novel.find();
    res.status(200).json({ success: true, count: novels.length, novels: novels })
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

//@desc    Get a novel
//@route   GET /api/v1/novels/:id
//@access  Public
exports.getNovel = async (req, res, next) => {
  console.log("id", req.params.id)
  try {
    const novel = await Novel.findById(req.params.id);
    console.log(novel)
    if (!novel) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, novel: novel });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

//@desc    Create novel
//@route   POSTs /api/v1/novels/addnovel
//@access  Private
exports.createNovel = async (req, res, next) => {
  console.log("createNovel", req.body)
  try {
    const novels = await Novel.create(req.body)
    // res.send(req.body)
    res.status(201).json({
      success: true,
      data: novels
    })
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
}

//@desc    Update novel
//@route   PUT /api/v1/novels/:id
//@access  Private
exports.updateNovel = async (req, res, next) => {
  try {
    const novel = await Novel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!novel) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: novel })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

//@desc    Delete novel
//@route   DELETE /api/v1/novels/:id
//@access  Private
exports.deleteNovel = (req, res, next) => {
  res.status(200).json({ success: true, msg: `novel ${req.params.id} is deleted` })
}
