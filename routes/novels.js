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

router.route('/')
  .get(getNovels)
  .post(createNovel);

router.route('/:id')
  .get(getNovel)
  .put(updateNovel)
  .delete(deleteNovel)

module.exports = router;