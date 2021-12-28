require("dotenv").config();
const jwt =  require("jsonwebtoken");
const User = require("../../model/User.model.js");

// Authenticate User by it's cookies!
const authenticateToken = async (req, res, next) => {
	try {
		const accessToken = req.cookies['access_token'] || req.body && req.body.accessToken;

		console.log(">>>>>>>>>>>>>", accessToken, "<<<<<<<<<<<<");

		if (!accessToken || accessToken.length === 0) {
			return res.status(302).json({ status: "failed", message: "User is Not verified!" })
		}

		const decodedToken = jwt.decode(accessToken);
		console.log(decodedToken);

		const user = await User.findOne({ userId: decodedToken.userId });
		console.log(user);

		if (!user) return res.status(400).send({ status: "failed", message: "Access Denied! Invalid User credentials!" });

		const isBothTokensSame = user.token.includes(accessToken);
		console.log(user.token, isBothTokensSame);

		if (!isBothTokensSame) return res.status(400).send({ status: "failed", message: "Access Denied! Token is not present in DB" });

		res.locals.user = {
			userId: user.userId, 
			apiKey: user.apiKey, 
			cart: user.cart,
			email: user.email,
			role: user.role
		};
		console.log(res.locals.user);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ status: "failed", message: error.message, error });
	}
};

module.exports = authenticateToken;
