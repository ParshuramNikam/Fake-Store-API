require('dotenv').config();

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log("Application runnung in " + process.env.NODE_ENV + " mode");

// DB connection :
const conn = require('./src/config/conn');
conn();

const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path');

// middlwwares
const headers = require('./src/middlewares/headers');
const userRoutes = require('./src/routes/users/users.routes.js')
const productRoutes = require("./src/routes/products/product.routes.js");
const cartRoutes = require("./src/routes/cart/cart.routes.js");


const corsOptions = {
	origin: '*',
	credentials: true, // required to pass
	allowedHeaders: "Content-Type, Authorization, X-Requested-With, Access-Control-Allow-Origin",
};

app.prepare().then(() => {
	const server = express();

	server.use(cookieParser());
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
	server.use(cookieParser());
	server.use("*", cors(corsOptions));
	server.use(headers);
	server.use(
		cors({
			origin: true, //included origin as true
			credentials: true, //included credentials as true
		})
	);



	// server.get('/api/forget-password/:otp/:userID', (req, res) => {
	// 	console.log(req.params.otp, req.params.userID);
	// 	res.render('pages/forget-password')
	// })

	server.use("/api", userRoutes);
	server.use("/api", productRoutes);
	server.use("/api", cartRoutes);

	// ============ ============== ============ ============== ============

	server.get('/api', (req, res) => {
		console.log(req.headers);
		console.log(req.cookies['test_cookie']);
		res.send({ message: "Welcome to server", myCookies: req.cookies['test_cookie'] || "NOT found" });
	})

	server.get('/demo', (req, res) => {
		res.cookie("test_cookie", "THIS IS A TEST COOKIE").send("HIIIIIIIIII");
	})

	server.post('/', (req, res) => {
		console.log("Getting headers....");
		console.log(req.headers['authorization']);
		res.send(req.headers.authorization)
	});

	// ================== imp 👇 ======================

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
