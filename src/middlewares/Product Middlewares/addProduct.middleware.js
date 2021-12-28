const { customAlphabet } = require("nanoid");
const Product = require("../../model/products.model.js");
const categories = require("../../constants/category.js");

const addProduct = async (req, res, next) => {
    try {
        console.log("req.body: ", JSON.parse(JSON.stringify(req.body)));
        let { id, title, price, description, category, imageURL, rating, availability, seller, source } = req.body;
 
        if (!id) {
            const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const nanoid = customAlphabet(alphabet, 6);
            id = nanoid();
        }
        else id.toString();

        const isIdPresent = await Product.findOne({ id });
        if (isIdPresent) return res.status(500).json({ status: "failed", message: "Provided 'id' already present. Please try another id" });

        if(!title || !price || !category) return res.status(400).send({status: "failed", message: "Please provide all required fields. Title, category, Price these are requird fields."})

        const isCategoryPresent = categories.includes(category);
        if (!isCategoryPresent) return res.status(500).json({ status: "failed", message: "Provided 'Category' is not present. Please enter valid category" });

        price = parseInt(price);

        const user = res.locals.user;
        let newProduct;
        if (user.role === 1) {
            // "No need" to specity expireAt -> because already set in schema -> default is 1hour
            // No newd to add 'productType' -> byDefault it is 'userAdded'
            newProduct = new Product({
                id, title, price, description, category, imageURL, rating, availability, seller, source,
                addedByUser: user.userId,
            })
        } else if(user.role === 2) {
            newProduct = new Product({
                id, title, price, description, category, imageURL, rating, availability, seller, source,
                productType: "default",
            })
        }
        console.log(newProduct);
        const product = await newProduct.save();

        res.locals.product = product;
        next();
    } catch (error) {
        res.status(400).send({ status: "Failed", message: error.message, error })
    }
}

module.exports = addProduct;