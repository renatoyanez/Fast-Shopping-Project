const S = require('sequelize')
const db = require("../db/db")
class Cart extends S.Model { }

Cart.init({
    amount: {
        type: S.INTEGER,
        defaultValue: 0
    },
    state: {
        type: S.STRING,
        defaultValue: "pending"
    },
    changeButton: {
        type: S.BOOLEAN,
        defaultValue: false
    },
}, { sequelize: db, modelName: 'cart' })



module.exports = Cart;