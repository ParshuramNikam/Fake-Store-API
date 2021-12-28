const envVars = require("dotenv");
envVars.config();
const connDB = require("./config/conn.js");
connDB();

const Product = require("./model/products.model.js");
const Cart = require("./model/cart.model.js");
const User = require('./model/User.model.js');

const currentDate = Date.now();
const pastDate = new Date(currentDate - (2 * 24 * 60 * 60 * 1000)); // 48 hour before date
console.log("current date:", currentDate);
console.log("past date:", pastDate);

/* ---------------------------------------------------------------------------------------------------------------- */

// Product will get deleted after 48hours of adding in all products.
const removeProduct = async () => {
    try {
        const products = await Product.find({ productType: "userAdded", createdAt: { $lt: pastDate } });

        if (products.length) {
            console.log(`===== Total ${products.length} products are ready to delete =====`);
            for (const product of products) {
                try {
                    await product.remove();
                    console.log(`prduct deleted successfully : ${product}`);
                } catch (error) {
                    console.log("error in Schedular Script! ERROR:-", error);
                }
            }
        } else {
            console.log("Ooops! No product found to delete! -> products:", products);
        }
    } catch (error) {
        console.log("Error in RemoveProduct :- ", error);
    }
}

// cartProducts will gets deleted after 48hours of product gets added to cart:- 
const makeCartProductsEmpty = async () => {
    try {
        const cartProductsBecomesEmpty = await Cart.find({ role: 1, firstProductAddedToCartAt: { $lt: pastDate } }).select('cartId');
        console.log("Products found to delete!", cartProductsBecomesEmpty);

        const cartProductsResult = await Cart.updateMany({ role: 1, firstProductAddedToCartAt: { $lt: pastDate } }, { cartProducts: [], firstProductAddedToCartAt: null })
        console.log(cartProductsResult);
    } catch (error) {
        console.log("Error in MakeCartProductsEmpty :- ", error);

    }
}

const deleteOTP = async () => {
    try {
        // delete otp after 24hours
        const users = await User.find({ otpTimeStamp: { $lt: new Date(currentDate - (1000)) } }).select('userId');
        console.log("delete otp of these users : ", users);

        const deletedOtpUsers = await User.updateMany({ otpTimeStamp: { $lt: pastDate } }, { otp: null, otpTimeStamp: null });
        console.log(deletedOtpUsers);
    } catch (error) {
        console.log(error.message, error);
    }
}

//  Function calling :-
removeProduct();
makeCartProductsEmpty();
deleteOTP()
