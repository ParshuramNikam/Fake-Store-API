const Product = require("../../model/products.model.js");
const User = require( "../../model/User.model.js");

const getProductById = async (req, res, next) => {
    try {
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);
        let user;

        const product = await Product.findOne({ id: req.params.id }).select("-__v -_id -createdAt -updatedAt");
        if (!product) return res.status(200).json({ message: `No product found! with id= ${req.params.id}` })

        console.log(product);

        if (product.productType === "default") {
            console.log(product);
            res.locals.product = product;
            return next();
        }

        if (apiKey) {
            user = await User.findOne({ apiKey: apiKey });
            console.log(user);

            if(!user) return res.status(400).send({status: "failed", message: "Please give valid API Key."})

            if (product.productType === "default" || user.role===2 ) {
                console.log(product);
                res.locals.product = product;
                return next();
            }

            if (user.apiKey !== apiKey || product.addedByUser !== user.userId) return res.status(400).send({ status: "false", message: "NO product found!" })

            console.log(product);
            res.locals.product = product;
            next();
            // res.status(200).json(product);
        }else{
            return res.status(400).send({ status: "false", message: "NO product found!" })
        }

        next();

    } catch (error) {
        console.error("error", error);
        res.status(400).send({ status: "Failed", message: error.message, error })

    }
}

module.exports = getProductById;