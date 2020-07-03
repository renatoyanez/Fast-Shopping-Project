const S = require('sequelize');
const db = require('../db/db');

class Products extends S.Model { }

Products.init({
    name: {
        type: S.STRING,
        validate: { notEmpty: true }
    },
    price: {
        type: S.INTEGER,
        allowNull: false
    },
    stock: {
        type: S.INTEGER,
        allowNull: false
    },
    description: {
        type: S.TEXT,
        allowNull: false
    },
    images: {
        type: S.ARRAY(S.STRING),
        allowNull: false
    },
}, { 
    sequelize: db, 
    modelName: 'products' 
})


module.exports = Products;
