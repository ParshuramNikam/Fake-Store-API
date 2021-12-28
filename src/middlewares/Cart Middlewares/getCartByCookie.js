const Cart = require("../../model/cart.model.js");
const jwt = require('jsonwebtoken');

const getCartByCookie = async (req, res, next) => {
    try {
        const accessToken = req.cookies['access_token'];

        if (accessToken) {
            console.log("==========================================");
            console.log(accessToken);
            const decodedToken = jwt.decode(accessToken);
            console.log(decodedToken);

            const cart = await Cart.findOne({ cartId: decodedToken.userId }, '-_id -__v -createdAt -updatedAt').populate('cartProducts.product');
            console.log(cart);
            console.log("==========================================");

            res.locals.cart = cart;
            next()

        } else {
            return res.status(400).send({ status: "failed", message: "Oops! Cookie not found!" });
        }
    } catch (error) {
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = getCartByCookie;