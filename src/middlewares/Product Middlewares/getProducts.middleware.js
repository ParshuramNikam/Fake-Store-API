const categories = require('../../constants/category.js');
const Product = require('../../model/products.model.js');
const User = require('../../model/User.model.js');

const getProducts = async (req, res, next) => {
    try {
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);

        let user;
        if (apiKey) {
            user = await User.findOne({ apiKey: apiKey });
            console.log(user);
        } else {
            console.log("User havn't pass API key! -> show default products only.");
        }

        // queries Allowed :--> limit , sort
        let findBy, limit, sortBy;

        if(!user) findBy = {productType: "default"};
        else if (user.role === 2) findBy = {};
        else findBy = { $or: [{ productType: "default" }, { addedByUser: user.userId }] };

        console.log(sortBy, limit, req.query.sort, req.params);
        console.log(findBy);

        if (req.query) {
            if (req.query.limit) limit = parseInt(req.query.limit);
            if (req.query.sort) sortBy = req.query.sort;
        }

        if (req.params) {
            if (req.params.category) {
                if (!(categories.includes(req.params.category))) return res.status(400).send("Category not found!")
                findBy = { ...findBy, category: req.params.category };
            }
        }

        let products = [];
        const exclude = '-_id -createdAt -updatedAt -__v'; // -productType

        if (limit && sortBy) {
            if (req.query.sort.includes('asc') || req.query.sort.includes('Asc')) {
                products = await Product.find(findBy, exclude).limit(limit).sort({ id: 1 });
            }
            else if (req.query.sort.includes('desc') || req.query.sort.includes('Desc')) {
                products = await Product.find(findBy, exclude).limit(limit).sort({ id: -1 });
            }
            else products = await Product.find(findBy, exclude).limit(limit);
        }
        else if (limit) {
            products = await Product.find(findBy, exclude).limit(limit);
        }
        else if (sortBy) {
            if (req.query.sort.includes('asc') || req.query.sort.includes('Asc')) {
                console.log('asc');
                products = await Product.find(findBy, exclude).sort({ id: 1 });
                // console.log(products);
            }
            else if (req.query.sort.includes('desc') || req.query.sort.includes('Desc')) {
                console.log('desc');
                products = await Product.find(findBy, exclude).sort({ id: -1 });
                // console.log(products);
            }
            else products = await Product.find(findBy, exclude)
        }
        else {
            products = await Product.find(findBy, exclude);
        }

        console.log("===========================");
        console.log(products[0]);
        console.log(products[products.length-1]);
        res.locals.products = products;
        next();

    } catch (error) {
        console.error("error", error);
        res.status(400).send({ status: "Failed", message: error.message, error })

    }
}


module.exports = getProducts;
