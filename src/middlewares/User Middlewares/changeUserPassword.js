const User = require( "../../model/User.model.js");
const bcrypt = require("bcrypt");

const changeUserPassword = async (req,res,next) => {
    try {
        console.log("in change user password");
        const {userId, otp} = req.params;
        const {password, cpassword} = req.body;
        console.log(userId, otp, password, cpassword);

        if(password !== cpassword) return res.status(400).send({status: "failed", message: "Passwords not match! Try again."})
        
        const user = await User.findOne({userId: userId});
        console.log(user);
        if(!user || !user.verified) return res.status(400).send({status:"failed", message: "User is not registered!"});
        
        if(otp !== user.otp) return res.status(400).send({status: "failed", message: "OTP incorrect!"});

        const isBothPasswordSame = bcrypt.compareSync(password,user.password);
        console.log(isBothPasswordSame);
        if(isBothPasswordSame) return res.status(400).send({status:"failed", message: "Password should be different from last password!"})

        const hashedPassword = await bcrypt.hashSync(password, 10);
        const updatedUser = await User.findOneAndUpdate({userId: userId}, {password: hashedPassword, otp: null, otpTimeStamp: null}); 
        console.log(updatedUser);

        res.status(200).send({status:"success", message: "Password Updated Sucessfully! Login with new password."});

        // next();
    } catch (error) {
        console.log(error);
        res.status(400).send({status:"failed", message: error.message, error})
    }
}

module.exports = changeUserPassword;