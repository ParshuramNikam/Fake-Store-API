const Product = require("../../model/products.model.js");

const updateProduct = async (req, res, next) => {
    try {
        const user = res.locals.user;

        const product = await Product.findOne({ id: req.params.id });
        if (!product) return res.status(400).send({ status: "failed", message: "Product not found!" });

        console.log(user,product);

        if (user.userId !== product.addedByUser && user.role !== 2) return res.status(400).send({ status: "failed", message: "No. You don't have a permission!" });

        const { id, ...rest } = req.body;
        let updation;

        // Don't change ID of product by user!
        if (user.role !== 2) {
            if (id) updation = rest;
            else updation = req.body;
            
        }

        const updatedProduct = await Product.findByIdAndUpdate(product._id, updation);

        res.locals.product = updatedProduct;

        next();
    } catch (error) {
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = updateProduct;