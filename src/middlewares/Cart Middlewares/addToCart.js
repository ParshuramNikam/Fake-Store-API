const Cart = require("../../model/cart.model.js");
const Product = require("../../model/products.model.js");
const mongoose = require('mongoose');
 
const addToCart = async (req, res) => {
	try {
		const user = res.locals.user;
		const apiKey = user.apiKey;
		console.log(">>>> ROLE", user.role, apiKey);

		// if cartType==='default' -> then access denied!

		let { productId, quantity } = req.body;
		if (quantity < 0) quantity *= -1;	// if quantity is -ve then make it +ve;
		let quantityIncBy = quantity;
		const { cartId } = req.params;

		if (!quantity) quantity = quantityIncBy = 1;

		console.log("productId : ", productId);
		if (!productId) return res.status(200).send({ status: "failed", message: "No productId found in req.body" })

		const product = await Product.findOne({ id: productId });
		if (!product) return res.status(400).send({ status: "failed", message: "Product not found" });

		const currentCart = await Cart.findOne({ cartId }).populate('cartProducts.product');		if(!currentCart || (currentCart.cartType==='default' && user.role!==2)) return res.status(400).send({status:"failed", message:"You don't have a permission to add into a cart!"})

		if( user.role!==2 && product.productType!=='default' && (currentCart.userId!== user.userId || product.addedByUser!==currentCart.userId) ) return res.status(400).send({status:"failed", message:"You don't have a permission to add into a cart!"});

		if (!currentCart) return res.status(400).send({ status: "failed", message: "No cart found!" })
		console.log("====>>", currentCart.cartProducts.length);

		if (currentCart.cartProducts.length ===0) {
			await Cart.findByIdAndUpdate(currentCart._id, { firstProductAddedToCartAt: new Date() });
			console.log("firstProductAddedToCartAt added in cart");
		}

		const productDetails = await Product.findOne({ id: productId });
		const isCartProductPresent = await Cart.find({ cartId: cartId, cartProducts: { $elemMatch: { 'product': mongoose.Types.ObjectId(productDetails._id.toString()) } } })

		if (isCartProductPresent.length) {
			await Cart.findOneAndUpdate({ cartId: cartId, 'cartProducts.product': mongoose.Types.ObjectId(productDetails._id.toString()) }, { $inc: { "cartProducts.$.quantity": quantityIncBy } })
			const newIncCart = await Cart.findOne({ cartId: cartId }).populate('cartProducts.product');
			return res.status(200).send({ status: "Success", message: "quantity increment succesful!", product: newIncCart })
		}

		await Cart.findOneAndUpdate({ userId: cartId }, { $push: { cartProducts: { product: productDetails, quantity } } })
		const updatedCart = await Cart.find({ cartId }).populate('cartProducts.product');
		res.status(200).send({ status: "success", message: `Product with id=${productId} added to cart`, cart: updatedCart });

	} catch (error) {
		console.log(error);
		res.status(400).json({ status: "failed", message: error.message, error });
	}
}

module.exports = addToCart;