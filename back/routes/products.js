const express = require("express");
const router = express.Router();
const {
    Products,
    Category
} = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/*** Go find products ***/
router.get("/all", (req, res, next) => {

    Products.findAll({
        include: [{
            model: Category,
        }]
    }).then(data => res.status(201).json(data))
        .catch(next);
});

/**** This one creates a property ****/
router.post("/create", (req, res, next) => {

    Products.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            images: req.body.images
        })
        .then(product => {
            Categories.findAll({
                where: {
                    name: req.body.Categories
                }
            }).then(categorium =>
                product.addCategories(categorium).then(() => res.status(201).json(product))
            );
        })
        .catch(err => {
            throw new Error(err);
        });
});

/**** This one edits property: ****/




module.exports = router;