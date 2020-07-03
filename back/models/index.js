const Users = require('./users');
const Products = require('./products');
const Cart = require('./cart');
const Category = require('./categories');

Products.belongsToMany(Category, { through: 'products_category' });
Category.belongsToMany(Products, { through: 'products_category' });
Cart.belongsToMany(Products, {through:"products_cart"})
Cart.belongsTo(Users)
module.exports = { Users: Users, Products: Products, Cart: Cart, Category: Category };