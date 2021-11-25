//@desc    Novel main page
//@route   GET /api/v1/novels
//@access  Public
exports.getNovels = (req, res, next) => {
  res.status(200).json({ success: true, msg: "All the novels here" })
}

//@desc    Get a novel
//@route   GET /api/v1/novels/:id
//@access  Public
exports.getNovel = (req, res, next) => {
  res.status(200).json({ success: true, msg: `enjoy the novel ${req.params.id}` })
}

//@desc    Create novel
//@route   POSTs /api/v1/novels
//@access  Private
exports.createNovel = (req, res, next) => {
  res.status(200).json({ success: true, msg: `the novel is created` })
}

//@desc    Update novel
//@route   PUT /api/v1/novels/:id
//@access  Private
exports.updateNovel = (req, res, next) => {
  res.status(200).json({ success: true, msg: `the novel ${req.params.id} is updated` })
}

//@desc    Delete novel
//@route   DELETE /api/v1/novels/:id
//@access  Private
exports.deleteNovel = (req, res, next) => {
  res.status(200).json({ success: true, msg: `novel ${req.params.id} is deleted` })
}
