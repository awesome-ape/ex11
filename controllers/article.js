const articleService = require('../services/article');

// יצירת מאמר חדש לפי בקשת POST
const createArticle = async (req, res) => {
  console.log('Creating article with title:', req.body.title);
  res.json(await articleService.createArticle(req.body.title));
};

// קבלת כל המאמרים בבקשת GET
const getArticles = async (req, res) => {
  res.json(await articleService.getArticles());
};

// קבלת מאמר לפי מזהה
const getArticle = async (req, res) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json({ errors: ['Article not found'] });
  }
  res.json(article);
};

// עדכון מאמר לפי מזהה
const updateArticle = async (req, res) => {
  try {
    const article = await articleService.updateArticle(req.params.id, req.body.title);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (err) {
    console.error("Error updating article:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// מחיקת מאמר לפי מזהה
const deleteArticle = async (req, res) => {
  try {
    const article = await articleService.deleteArticle(req.params.id);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (err) {
    console.error("Error deleting article:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  // updateArticle,
  // deleteArticle
};
