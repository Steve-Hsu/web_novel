const express = require('express');
// Import controllers
const {
  getNovels,
  getNovel,
  createNovel,
  updateNovel,
  novelPhotoUpload,
  deleteNovel,
} = require('../controllers/novels')

// Middleware
// For private route to auth user
const { protect } = require('../middleware/auth');

const router = express.Router();

// Routes the path here '/' equlas '/api/v1/novels/'
router.route('/')
  .get(getNovels)

router.route('/addnovel')
  .post(protect, createNovel);

router.route('/:id')
  .get(getNovel)
  .put(protect, updateNovel)
  .delete(protect, deleteNovel)

router.route('/:id/photo')
  .post(novelPhotoUpload)



module.exports = router;