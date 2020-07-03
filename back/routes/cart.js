const express = require('express');
const router = express.Router();
const {
	Cart,
	Products,
	Users
} = require('../models/index');
const {
	Op
} = require('sequelize');


router.get("/all", (req, res, next) => {
	Cart.findAll()
	  .then(data => {
		res.status(200).json(data);
	  })
	  .catch(next);
  });

router.get('/:id', function (req, res) {
	let id = req.params.id;
	Products.findOne({
		where: {
			id: id
		}
	}).then((product) => res.json(product));
});

router.post('/:productId', (req, res) => {
	Cart.create({
			productId: req.params.productId
		})
		.then((cart) => cart.setProduct(req.params.productId))
		.then((cart) => res.json(cart));
});


router.delete('/delete/:productId', (req, res, next) => {
	Cart.destroy({
			where: {
				productId: req.params.productId
			}
		}).then((data) => res.json(data))
		// .catch(next)
});




module.exports = router;