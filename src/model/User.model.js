const mongoose = require("mongoose");
const Cart = require("./cart.model.js");

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Cart,
    },
    apiKey: {
        type: String,
        require: true
    },
    token: [String],
    role: {
        type: Number,
        enum: [0, 1, 2],   // 0 => Default User  &  1 => Registerd User  &  2 => Admin
        default: 1,
    },
    otp: {
        type: String,
        default: null,
        expires: '86400'  // 24 * 3600sec => 24 hours => 1 day 
    },
    otpTimeStamp: {
        type: Date,
        default: null,
        expires: '86400'
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;