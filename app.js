const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');

// טוען משתני סביבה מקובץ בהתאם לסביבה
require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

// חיבור למסד נתונים
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// רישום הנתיב /articles
app.use('/articles', articles);
const categories = require('./routes/category');
app.use('/categories', categories);

// הפעלת השרת
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
