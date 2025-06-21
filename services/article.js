const Article = require('../models/article');

// יצירת מאמר חדש
const createArticle = async (title, published) => {
    console.log('Creating article with title (services):', title);
  const article = new Article({ title: title });
  if (published) article.published = published;
  return await article.save();
};

// קבלת מאמר לפי מזהה
const getArticleById = async (id) => {
  return await Article.findById(id);
};

// קבלת כל המאמרים
const getArticles = async () => {
  return await Article.find({});
};

// עדכון מאמר לפי מזהה
const updateArticle = async (id, title) => {
  const article = await getArticleById(id);
  if (!article) return null;

  article.title = title;
  await article.save();
  return article;
};

// מחיקת מאמר לפי מזהה
const deleteArticle = async (id) => {
  const article = await getArticleById(id);
  if (!article) return null;

  await article.remove();
  return article;
};

module.exports = {
  createArticle,
  getArticleById,
  getArticles,
  updateArticle,
  deleteArticle
};
