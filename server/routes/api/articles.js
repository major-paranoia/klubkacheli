const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Articles
router.get('/', async (req, res) => {
    const articles = await loadArticlesCollection();
    res.send(await articles.find({}).toArray());
});

// Get Articles By Id
router.get('/:categoryId', async (req, res) => {
    const articles = await loadArticlesCollection();
    res.send(await articles.find({ categoriesId: req.params.categoryId}).toArray());
});

async function loadArticlesCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology:true });
    return client.db('blog').collection('articles');
}

module.exports = router;