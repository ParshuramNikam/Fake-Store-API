const User = require("../../model/User.model.js");
const apiKeyGenerator = require("../../helpers/apiKeyGenerator.js");
const generateToken = require("../../helpers/generateToken.js");
const Cart = require("../../model/cart.model.js");
const sendMailToUser = require("../../helpers/sendMailToUser.js");

const verifySignupCredentials = async (req, res, next) => {
    try {
        const { userId, otp } = req.params;
        console.log(userId, otp);

        if (!userId || !otp) return res.status(400).send({ status: "failed", message: "Required fields not present in URL params." })

        const isAlreadyRegistered = await User.findOne({ userId: userId });
        console.log("already registerd users found :->> \n", isAlreadyRegistered, "<<-");

        if (!isAlreadyRegistered) return res.status(400).send({ status: "failed", message: "User is not registered! No user found with these credentials" })

        if (isAlreadyRegistered && isAlreadyRegistered.verified) {
            console.log("User Already Registered & verified");
            return res.status(200).redirect(`${process.env.APP_URL}/user/login`);
        }

        if (otp !== isAlreadyRegistered.otp) {
            return res.status(400).send({ status: "failed", message: "Your credientials are not verified! Invalid/Expired OTP!" })
        }

        let apiKey;
        let cartType;
        if (isAlreadyRegistered.role == 0) {
            apiKey = null;
            cartType = 'default';
        } else {
            apiKey = await apiKeyGenerator();
            cartType = 'userAdded';
        }

        // create a signed Token for the user. 
        const signedToken = await generateToken(isAlreadyRegistered.userId, isAlreadyRegistered.role);

        res.cookie("access_token", signedToken, {
            expires: new Date(Date.now() + 24 * 3600000) // cookie will be removed after 24 hours
            // secure: true, // use in production
        });

        // Create a cart for a new User
        const newCart = new Cart({
            userId: isAlreadyRegistered.userId,
            cartId: isAlreadyRegistered.userId,
            cartType: cartType,
            cartProducts: [],
        });
        const savedCart = await newCart.save();
        // add cart to locals -> afer creating user, if we got error in adding user then we can delete this cart in catch
        res.locals.cartCreated = savedCart;

        const updatedUser = await User.findOneAndUpdate({ email: isAlreadyRegistered.email }, {
            otp: null,
            verified: true,
            cart: savedCart,
            $push: { token: signedToken },
            apiKey: apiKey,
        })

        console.log(updatedUser);

        res.locals.user = updatedUser;
        res.locals.token = signedToken;

        const isEmailSentSucessfully = sendMailToUser(isAlreadyRegistered.email, 'sign-up');

        if(!isEmailSentSucessfully){
            return res.status(400).send({status:"failed", message:"Email not sent to user!"})
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", message: error.message, error })
    }
}

module.exports = verifySignupCredentials;