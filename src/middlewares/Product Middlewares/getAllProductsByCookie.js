const jwt = require('jsonwebtoken');
const Product = require('../../model/products.model.js');

const getAllProductsByCookie = async (req,res,next) => {
    try {
        const accessToken = req.cookies['access_token'];

        if (accessToken) {
            console.log("==========================================");
            console.log(accessToken);
            const decodedToken = jwt.decode(accessToken);
            console.log(decodedToken);

            const products = await Product.find({ $or: [{ productType: "default" }, { addedByUser: decodedToken.userId }] }, '-_id -__v -createdAt -updatedAt');
            console.log(products);
            console.log("==========================================");

            res.locals.products = products;
            next()

        } else {
            return res.status(400).send({ status: "failed", message: "Oops! Cookie not found!" });
        }

        next();
    } catch (error) {
        res.status(400).send({status:"failed", message: error.message, error})
    }
}

module.exports = getAllProductsByCookie;