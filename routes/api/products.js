const Product = require("../../db").Product;
const route = require("express").Router();

route.get("/", (req, res) => {
	Product.findAll()
		.then((products) => {
			res.status(200).send(products);
		})
		.catch((err) => {
			res.status(500).send({
				error: "Could not retrieve products",
			});
		});
});

route.post("/", (req, res) => {
	if (isNaN(req.body.price)) {
		res.status(403).send({
			error: "Price is not a valid number",
		});
	}
	Product.create({
		name: req.body.name,
		manufacturer: req.body.manufacturer,
		price: parseFloat(req.body.price),
	})
		.then((product) => {
			res.status(201).send(product);
		})
		.catch((err) => {
			res.status(501).send({
				error: "Could not add new Product",
			});
		});
});

exports = module.exports = route;
