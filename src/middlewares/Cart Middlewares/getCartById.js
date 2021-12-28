const Cart = require("../../model/cart.model.js");
const User = require( "../../model/User.model.js");

const getCartById = async (req, res, next) => {
    try {
        const cartId = req.params.cartId;
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);
        console.log(apiKey);

        if (!apiKey) {
            const defaultCart = await Cart.findOne({ cartId: cartId, cartType: "default" });
            if (!defaultCart) return res.status(400).send({ status: "failed", message: "No user found with this cart ID!" });

            return res.status(200).send({ status: "success", cart: defaultCart });
        }

        const user = await User.findOne({ apiKey: apiKey });
        console.log(user);

        if (!user || (user.userId !== cartId && user.role !== 2)) {
            return res.status(400).send({ status: "failed", message: "No user found with this cart ID!" });
        }

        if (user.role === 0) return res.status(400).send({ status: "failed", message: "You don't have a permission!" });

        const cart = await Cart.findOne({ cartId: cartId }, '-_id -__v -createdAt -updatedAt -cartProducts._id -cartProducts.product._id -cartProducts.product.__v -cartProducts.product.createdAt -cartProducts.product.updatedAt').populate('cartProducts.product');
        res.locals.cart = cart;

        next()
    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = getCartById;