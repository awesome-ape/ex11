const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

// נתיב לבקשות כלליות על כל המאמרים
router.route('/')
  .get(articleController.getArticles)
  .post(articleController.createArticle);

// נתיב לבקשות על מאמר ספציפי לפי מזהה
router.route('/:id')
  .get(articleController.getArticle)
 // .patch(articleController.updateArticle)
 // .delete(articleController.deleteArticle);

module.exports = router;
