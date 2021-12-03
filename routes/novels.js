const express = require('express');
// Import controllers
const {
  getNovels,
  getNovel,
  createNovel,
  updateNovel,
  deleteNovel,
} = require('../controllers/novels')
const router = express.Router();

// Routes the path here '/' equlas '/api/v1/novels/'
router.route('/')
  .get(getNovels)

router.route('/addnovel')
  .post(createNovel);

router.route('/:id')
  .get(getNovel)
  .put(updateNovel)
  .delete(deleteNovel)

module.exports = router;