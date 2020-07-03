const express = require("express");
const router = express.Router();
const {
    Categories,
    Products
} = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


router.get("/all", (req, res, next) => {
    Categories.findAll()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
});

/**** Searches by params ****/
router.get("/:categories", (req, res, next) => {
    const lowCase = req.params.categories.toLowerCase()
    Categories.findAll({
            include: [{
                model: Products
            }],
            where: {
                name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + lowCase + '%')
            }
        }).then((categories) => {
            return res.json(categories)
        })
        .catch(next)
});

module.exports = router;