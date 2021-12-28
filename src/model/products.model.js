const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    addedByUser: {
        type: String,
    },
    productType: {
        type: String,
        enum: ["default", "userAdded"],
        default: "userAdded",
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String
    },
    rating: {
        type: Number,
        range: {
            min: { type: Number, min: 0 },
            max: { type: Number, min: 5 },
        },
        default: 0,
        require: true,
    },
    availability: {
        type: String,
        enum: ["InStock", "OutOfStock"],
        default: "InStock",
    },
    seller: {
        type: String,
    },
    source: {
        type: String
    }
}, { timestamps: true});


const Product = mongoose.model("Products", productSchema);

module.exports = Product;
