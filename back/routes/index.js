const express = require('express')
const router = express.Router();
const db = require("../db/db");

const products = require('./products');
const users = require('./users')
const carts = require('./cart')
const categories = require('./categories')

router.use('/products', products)
router.use('/users', users)
router.use('/cart', carts)
router.use('/categories', categories)

module.exports = router;