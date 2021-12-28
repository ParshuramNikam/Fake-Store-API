const express = require('express');
const router = express.Router();

const Product = require("../../model/products.model.js");
const categories = require("../../constants/category.js");
const getProducts = require("../../middlewares/Product Middlewares/getProducts.middleware.js");
const addProduct = require("../../middlewares/Product Middlewares/addProduct.middleware.js");
const checkUserType = require("../../middlewares/Auth/checkUser.js");
const deleteProduct = require("../../middlewares/Product Middlewares/deleteProduct.middleware.js");
const getProductById = require("../../middlewares/Product Middlewares/getProductsById.js");
const updateProduct = require("../../middlewares/Product Middlewares/updateProduct.js");
const getAllProductsByCookie = require("../../middlewares/Product Middlewares/getAllProductsByCookie.js");

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// ------------------------------------------------------------------------------------------

router.get("/products", getProducts, (req, res) => {
	res.status(200).json(res.locals.products);
});

router.get('/products/by/cookie', getAllProductsByCookie, (req, res) => {
	try {
		res.status(200).json(res.locals.products);
	} catch (error) {
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
})

router.get("/products/:id", getProductById, (req, res) => {
	try {
		res.status(200).json(res.locals.product);
	} catch (error) {
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
});

// ------------------------------------------------------------------------------------------

router.get("/categories", (req, res) => {
	res.status(200).send(categories);
});

router.get("/products/category/:category", getProducts, (req, res) => {
	res.status(200).json(res.locals.products);
});


// ------------------------------------------------------------------------------------------

router.post("/product/add", checkUserType, addProduct, (req, res) => {
	const product = res.locals.product;
	res.status(201).json({
		status: "success",
		message: "Product saved successfully",
		savedProduct: {
			"id": product.id,
			"addedByUser": product.addedByUser,
			"productType": product.productType,
			"title": product.title,
			"price": product.price,
			"description": product.description,
			"category": product.category,
			"availability": product.availability,
			"rating": product.rating,
			"imageURL": product.imageURL,
			"seller": product.seller,
			"source": product.source,
		},
	});
});

router.patch("/products/update/:id", checkUserType, updateProduct, async (req, res) => {
	try {
		// await Product.findOneAndUpdate(
		// 	{ id: req.params.id },
		// 	{ ...req.body }
		// );
		const product = await Product.findOne({ id: req.params.id }).select('-_id -__v -createdAt -updatedAt');
		res.status(202).json({ status: "success", message: "Product updated successfully!", product });
	} catch (error) {
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
});

router.delete("/products/delete/:id", checkUserType, deleteProduct, async (req, res) => {
	try {
		const { id, addedByUser, productType, title, price, description, category, availability } = res.locals.product;
		res.status(200).json({
			status: "success",
			message: "Product deleted succesfully",
			deletedProduct: {
				id, addedByUser, productType, title, price, description, category, availability
			},
		});
	} catch (error) {
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
});

module.exports = router;