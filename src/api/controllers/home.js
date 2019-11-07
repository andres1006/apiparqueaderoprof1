const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = (app) => {
    app.use('/', router);
};

router.get('/home', (req, res, next) => {
    Article.find((err, articles) => {
        if (err) return next(err);
        res.render('index', {
            title: 'Parqueadero',
            articles: articles
        });
    });
});