const mongoose = require("mongoose");
const Product = require("./products.model.js");

const cartSchema = mongoose.Schema(
	{
		cartId: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			unique: true,
			required: true,
		},
		cartType: {
			type: String,
			enum: ["default", "userAdded"],
			default: "userAdded",
		},
		cartProducts: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: Product,
				},
				quantity: {
					type: Number,
					default: 1,
				},
				date: {
					type: Date,
					default: new Date(),
				}
			},
		],
		firstProductAddedToCartAt: {
			type: Date,
		},
	});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
