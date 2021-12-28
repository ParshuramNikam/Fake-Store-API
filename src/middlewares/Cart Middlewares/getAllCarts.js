const Cart = require("../../model/cart.model.js");
const User = require( "../../model/User.model.js");

const getAllCarts = async (req, res, next) => {
    try {
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);
        console.log(apiKey);

        let carts;
        const user = await User.findOne({ apiKey: apiKey });
        console.log(user);

        if (!user) {
            console.log("showing only default products!");
            carts = await Cart.find({ cartType: "default" }, '-_id -__v -createdAt -updatedAt').populate('cartProducts.product');
            console.log(carts);
        }
        else {
            if (user.role === 2) {
                console.log("showing All products to ADMIN!");
                carts = await Cart.find({}, '-_id -__v -createdAt -updatedAt').populate('cartProducts.product')
                console.log(carts);
            }
            else {
                console.log("showing products added by this user & default products also!");
                carts = await Cart.find({ $or: [{ cartId: user.userId }, { cartType: 'default' }] }, '-_id -__v -createdAt -updatedAt -cartProducts._id').populate('cartProducts.product');
                console.log(carts);
            }
        }
        res.locals.carts = carts;
        next();

    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", message: error.message, error })
    }
}

module.exports = getAllCarts;