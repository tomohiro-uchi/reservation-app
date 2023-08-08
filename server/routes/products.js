const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/', async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        res.json(foundProducts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:productId', async function(req, res) {
    const productId = req.params.productId;
    try {
        const foundProduct = await Product.findById(productId);
        if (!foundProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(foundProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
