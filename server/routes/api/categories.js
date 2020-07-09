const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await loadCategoriesCollection();
    res.send(await categories.find({}).toArray());
});

async function loadCategoriesCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology:true });
    return client.db('blog').collection('categories');
}

module.exports = router;