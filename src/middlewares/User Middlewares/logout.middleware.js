const User = require( "../../model/User.model.js");
const jwt = require('jsonwebtoken');

const logout = async(req,res,next) => {
    try {
        const accessToken = req.cookies['access_token'];
		if ( !accessToken || accessToken===null || accessToken.length === 0 ) {
			return res.status(302).json({ status: "success", message: "Logout successful! But User doesn't have valid/No Access_Token" })
		}

        const decodedToken = jwt.decode(accessToken);
		console.log(decodedToken);

        // to logout user from a single device having this access_token:
        // await User.findOneAndUpdate({userId: decodedToken.userId},{$pull: {token: accessToken}});

        // to logout user from all devices:-
        await User.findOneAndUpdate({userId: decodedToken.userId}, {token: []});

		console.log(accessToken)
        const user  = await User.findOne({userId: decodedToken.userId}).populate('cart');
        console.log(user);

        await res.cookie("access_token", "");

        res.locals.user =  {
            userId: user.userId,
            email: user.email,
            apiKey: user.apiKey,
            cart: user.cart,
        };
        next();
        
    } catch (error) {
        res.status(400).json({status:"failed", message: error.message, error});
    }
}

module.exports = logout;