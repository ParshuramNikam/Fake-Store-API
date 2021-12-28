const generateUniqueString = require("../../helpers/generateUniqueString.js");
const sendMailToUser = require("../../helpers/sendMailToUser.js");
const User = require( "../../model/User.model.js");


const sendOtpForForgetPassword = async (req,res,next) => {
    try {
        const { email } = req.query;

        const user = await User.findOne({email});
        console.log(email,user);
        if(!user) return res.status(400).send({status:"failed", message: "Email address is not registered!"})

        const userOTP = await generateUniqueString(12);

        await User.findByIdAndUpdate(user._id, {otp: userOTP, otpTimeStamp: new Date()});

        sendMailToUser(email, 'change-password', `${process.env.APP_URL}/user/change-password/${userOTP}/${user.userId}`);
        res.status(200).send({status:"success", message:"Email sent to you!"})
    } catch (error) {
        console.log(error);
        res.status(400).send({status:"failed", message: error.message, error});
    }
}

module.exports = sendOtpForForgetPassword;