const headers = (req, res, next) => {
	// res.header('Access-Control-Allow-Origin', 'https://localhost:8000');

	// for multiple origins
	// const allowedOrigins = ['https://fakestores.herokuapp.com', 'http://localhost:8000', 'http://localhost:3000', 'http://127.0.0.1:8000', 'http://127.0.01:3000'];
	// const origin = req.headers.origin;
	// if (allowedOrigins.includes(origin)) {
	// 	res.setHeader('Access-Control-Allow-Origin', origin);
	// }

	res.header('Access-Control-Allow-Origin', req.headers.origin)

	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
	res.header('Access-Control-Allow-Origin', req.header('origin'));
	next();
}

module.exports = headers;