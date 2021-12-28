const Cart = require("../../model/cart.model.js");
const Product = require("../../model/products.model.js");
const mongoose = require('mongoose');

const removeFromCart = async (req, res) => {
	try {
		const user = res.locals.user;
		const apiKey = user.apiKey;
		console.log(">>>> ROLE", user.role, apiKey);

		let { productId, quantity } = req.body;
		let quantityDecBy = quantity * (-1);
		const { cartId } = req.params;

		if (!quantity) {
			quantity = quantityDecBy = -1;
		}

		console.log("productId : ", productId);
		if (!productId) return res.status(200).send({ status: "failed", message: "No productId found in req.body" })

		const product = await Product.findOne({ id: productId });
		console.log(product);
		if (!product) return res.status(400).send({ status: "failed", message: "Product not found in in DB!" });

		const cart = (await Cart.findOne({ cartId }));
		if (!cart) return res.status(400).send({ status: "failed", message: "No cart found!" });

		if ((user.role !== 2 && cart.cartType === 'default' || user.userId !== cart.userId)) {
			return res.status(400).send({ status: "failed", message: "No! You don't have a permission!" });
		}

		const isProductInCartPresent = await Cart.find({ cartId: cartId, cartProducts: { $elemMatch: { 'product': mongoose.Types.ObjectId(product._id.toString()) } } })

		if (isProductInCartPresent.length === 0) return res.status(400).send({ status: "failed", message: "Product does not found in cart!" })

		const quantityDecProduct = await Cart.findOneAndUpdate({ cartId: cartId, 'cartProducts.product': mongoose.Types.ObjectId(product._id.toString()) }, { $inc: { "cartProducts.$.quantity": quantityDecBy } })
		console.log(quantityDecProduct);

		const removeProductDetailsFromCart = await quantityDecProduct.cartProducts.filter((checkproduct) => checkproduct.quantity <= 1)

		if (removeProductDetailsFromCart.length) {
			removeProductDetailsFromCart.map(async (oneProduct) => {
				await Cart.findOneAndUpdate({ cartId: cartId }, { $pull: { cartProducts: { _id: oneProduct._id } } })
			})
		}

		const newIncCart = await Cart.find({ cartId: cartId }).populate('cartProducts.product');
		return res.status(200).send({ message: "quantity decrement succesful!", product: newIncCart })


	} catch (error) {
		res.status(400).send({ status: "failed", message: error.message, error });
	}
}

module.exports = removeFromCart;