const emailValidator = require("../../helpers/emailValidator.js");
const User = require( "../../model/User.model.js");
const Cart = require("../../model/cart.model.js");
const bcrypt = require("bcrypt");
const sendMailToUser = require("../../helpers/sendMailToUser.js");
const generateUniqueString = require("../../helpers/generateUniqueString.js");

const Hashing = (input) => {
	return bcrypt.hashSync(input, 10);
};

String.prototype.trimRight = function () {
	return this.replace(/\s+$/, '');
}

const signup = async (req, res, next) => {
	try {
		let { password, email, userId, role, secretKey } = req.body;
		email = email.toLowerCase().trim();
		password = password.trimRight();
		// console.log(req.cookies['access_token']);

		if (!email || !password) {
			return res.status(200).json({ status: "failed", message: "email, password required!", });
		}

		if (!userId) {
			// userId = await generateID(6);
			userId = `${email.split('@')[0]}-${parseInt(Math.random() * 1000)}`
		}

		email = email.toLowerCase();
		const isEmail = emailValidator(email);
		if (!isEmail) return res.status(400).json({ status: "failed", message: "Not a valid Email Address" });

		const isAlreadyRegistered = await User.findOne({ $or: [{ email }, { userId }] });
		console.log("already registerd users found :->> \n", isAlreadyRegistered, "<<-");

		if (isAlreadyRegistered) console.log(isAlreadyRegistered.userId, isAlreadyRegistered.verified)

		if (isAlreadyRegistered && isAlreadyRegistered.verified) return res.status(403).send({ status: "failed", message: "User Already Registered and verified too!" });
		if (isAlreadyRegistered) return res.status(403).send({ status: "failed", message: "User Already Registered" });

		// console.log("========================================================");
		// console.log(role);
		// console.log(secretKey, process.env.secretKey);
		console.log("Is valid ADMIN :-", secretKey === process.env.SECRET_KEY);
		// console.log("========================================================");

		if (role === 2 && secretKey !== process.env.SECRET_KEY) {
			role = 1;
		}
		if (role === 0 && secretKey !== process.env.SECRET_KEY) {
			role = 1;
		}


		let userOTP = await generateUniqueString(6);
		const initialUser = new User({
			userId, email, role,
			otp: userOTP,
			verified: false,
			password: Hashing(password),
		})
		await initialUser.save();

		const isEmailSent = sendMailToUser(email, 'send-otp-link', `${process.env.APP_URL}/api/auth/authenticate-signup/${userId}/${userOTP}`);

		if (!isEmailSent) return res.status(400).send({ status: "failed", message: "Email not sent to user!" });

		next();
	} catch (error) {
		if (res.locals.cartCreated) {
			await Cart.findByIdAndDelete(res.locals.cartCreated._id);
			console.log("res.locals.cartCreated deleted succefully!  cart._id:", res.locals.cartCreated._id);
		}
		if (error.errors && error.errors.role && error.errors.role.name === "ValidatorError") {
			return res.status(400).send({ status: "failed", message: "Not a valid role!" })
		}
		console.log(error);
		res.status(400).send({
			status: "Failed",
			message: error.message,
			error,
		});
	}
};

module.exports = signup;
