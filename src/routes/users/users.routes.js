const express = require('express');
const router = express.Router();

const cookieParser = require("cookie-parser");
const signup = require("../../middlewares/User Middlewares/signup.middleware.js");
const login = require("../../middlewares/User Middlewares/login.middleware.js");
const authenticateToken = require("../../middlewares/Auth/authenticateToken.js");
const logout = require("../../middlewares/User Middlewares/logout.middleware.js");
const getAllUsers = require("../../middlewares/User Middlewares/getAllUsers.js");
const getSingleUser = require("../../middlewares/User Middlewares/getSingleUser.js");
const verifySignupCredentials = require("../../middlewares/User Middlewares/verifySignupCredentials.js");
const sendOtpForForgetPassword = require("../../middlewares/User Middlewares/sendOtpForForgetPassword.js");
const changeUserPassword = require("../../middlewares/User Middlewares/changeUserPassword.js");
const deleteUserAndCartFromDB = require('../../middlewares/User Middlewares/deleteUserAndCartFromDB.js');
const apiKeyGenerator = require('../../helpers/apiKeyGenerator.js');

router.use(cookieParser());
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// ------------------------------------------------------------------------------------------

// NOTE:  "/account" -> these are dummy urls which will be used by users just for dummy response

router.post("/auth/signup", signup, (req, res) => {
	res.status(200).send({ status: "success", message: "Email is sent to user. Check your Email and verify your credentials!" });
});

router.post("/account/signup", (req, res) => {
	let { password, email } = req.body;
	email = email.toLowerCase().trim();
	password = password.trimRight();

	const userId = `${email.split('@')[0]}-${parseInt(Math.random() * 1000)}`

	res.status(200).send({
		status: "success",
		user: {
			email: email,
			password: password,
			userId: userId,
			apiKey: apiKeyGenerator(),
			cart: userId

		},
		message: "User registred scuccesfully!"
	});
})

router.get("/auth/authenticate-signup/:userId/:otp", verifySignupCredentials, (req, res) => {
	console.log(req.params.userId);
	console.log(req.params.otp);
	res.status(200).redirect(`${process.env.APP_URL}/user/login`);
	// res.status(200).send({ status: "success", message: "User verified successfully!", userId: req.params.userId });
})

router.get('/auth/forget-password/', sendOtpForForgetPassword, (req, res) => {
	console.log("aaa");
})

router.post('/auth/changePassword/:userId/:otp', changeUserPassword, (req, res) => {
	res.send(req.params)
})

router.post('/auth/login', (req, res) => {
	res.status(200).json({
		status: "success",
		message: 'login success',
		user: res.locals.user
	});
})

router.post('/account/login', (Req, res) => {
	let { password, email } = req.body;
	email = email.toLowerCase().trim();
	password = password.trimRight();

	const userId = `${email.split('@')[0]}-${parseInt(Math.random() * 1000)}`

	res.status(200).send({
		status: "success",
		user: {
			email: email,
			userId: userId,
			apiKey: apiKeyGenerator(),
			cart: userId
		},
		message: "User logged in scuccesfully!"
	});
})

router.post('/auth/protected', authenticateToken, async (req, res) => {
	const user = res.locals.user;
	return res.status(302).json({ status: "success", apiKey: user.apiKey, user: user, message: "User is verified!" })
})

router.delete('/auth/logout', logout, (req, res) => {
	const user = res.locals.user;
	return res.status(200).json({ status: "success", message: "Logout Succesful! & Token deleted.", user: user });
})

router.delete('/account/logout', (req, res) => {
	let { email } = req.body;
	email = email.toLowerCase().trim();
	// password = password.trimRight();

	const userId = `${email.split('@')[0]}-${parseInt(Math.random() * 1000)}`

	res.status(200).send({
		status: "success",
		message: "User logout scuccesfully!",
		user: {
			userId: userId,
			email: email,
		}
	});
})


// deleted user and its respective cart stored in DB
router.delete('/user/delete/:userId', deleteUserAndCartFromDB, (req, res) => {
	res.status(200).json({ status: "success", message: "User and cart deleted succesfully!" });
})

// ------------------------------------------------------------------------------------------

router.get('/users', getAllUsers, (req, res) => {
	try {
		const users = res.locals.users;
		res.status(200).json({ status: "successs", users: users });
	} catch (error) {
		res.status(400).send({ status: "failed", message: error.message, error });
	}
})

router.get('/users/:userId', getSingleUser);

module.exports = router;