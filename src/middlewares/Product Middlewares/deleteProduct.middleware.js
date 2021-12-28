const Product = require("../../model/products.model.js");

const deleteProduct = async (req, res, next) => {
    try {
        const user = res.locals.user;
        console.log("user:", user);
        const productIdToDelete = req.params.id;
        console.log(req.params.id);

        let product = await Product.findOne({ id: productIdToDelete });
        if (!product) return res.status(400).send({ status: "failed", message: "Product not found! Maybe product is expired or deleted" })
        console.log("product", product);

        if ((user.userId === product.addedByUser) || user.role === 2) {
            res.locals.product = product;
            await product.remove();
        }

        console.log(user.userId === product.addedByUser);
        if (user.role !== 2 && product.addedByUser !== user.userId) return res.status(400).send({ status: "failed", message: "You don't have a permission to delete!" })

        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = deleteProduct;