export default {
	addProduct: {
		reqBody: {
			id: "PN0123",
			title: "dummy product",
			price: 1000,
			description: "This is a dummy electronic product.",
			category: "electronics",
			imageURL: "https://via.placeholder.com/350/6366f1",
			rating: {
				rate: 4.2,
				count: 25,
			},
			availability: "InStock",
			seller: "FakeStore",
			source: "https://www.flipkart.com/",
		},
		output: {
			status: "success",
			message: "Product saved successfully",
			savedProduct: {
				id: "PN0123",
				title: "dummy product",
				price: 1000,
				description: "This is a dummy electronic product.",
				category: "electronics",
				imageURL: "https://via.placeholder.com/350/6366f1",
				rating: {
					rate: 4.2,
					count: 25,
				},
				availability: "InStock",
				seller: "FakeStore",
				source: "https://www.flipkart.com/",
			},
		},
	}, 

	updateProduct: {
		reqBody: {
			title: "This is Dummy Product",
			price: 999,
			availability: "OutOfStock",
			rating: {
				rate: 4.5,
				count: 30,
			},
		},
		output: {
			id: "PN0123",
			title: "This is a dummy product",
			price: 999,
			description: "This is a dummy electronic product.",
			category: "electronics",
			imageURL: "https://via.placeholder.com/350/6366f1",
			rating: {
				rate: 4.5,
				count: 30,
			},
			availability: "OutOfStock",
			seller: "FakeStore",
			source: "https://www.flipkart.com/",
		},
	},

	deleteProduct: {
		reqBody: null,
		output: {
			status: "success",
			message: "Product deleted succesfully",
			deletedProduct: {
				id: "PN0123",
				title: "This is a dummy product",
				price: 999,
				description: "This is a dummy electronic product.",
				category: "electronics",
				imageURL: "https://via.placeholder.com/350/6366f1",
				rating: {
					rate: 4.5,
					count: 30,
				},
				availability: "OutOfStock",
				seller: "FakeStore",
				source: "https://www.flipkart.com/",
			},
		},
	},

	// ------------------- CART -----------------------

	addCartProduct: {
		reqBody: {
			productId: "PN_612",
			quantity: "3",
		},
		output: {
			status: "success",
			message: "Product with id=PN_612 added to cart",
			updatedCart: {
				_id: "618113c061bfb76e9b17e8f8",
				cartId: "1",
				userId: "1",
				cartProducts: [
					{
						product: {
							_id: "618b6050e9c7ee6c6f489ab2",
							id: "PN_612",
							title: "This is Dummy Product",
							price: 999,
							category: "electronics",
							availability: "OutOfStock",
							createdAt: "2021-11-10T06:01:52.826Z",
							updatedAt: "2021-11-10T09:44:35.690Z",
							__v: 0,
						},
						quantity: 3,
						date: "2021-11-11T08:36:46.070Z",
						_id: "618cd846d138f2865be12b11",
					},
				],
				createdAt: "2021-11-02T10:32:32.959Z",
				updatedAt: "2021-11-11T08:45:58.812Z",
				__v: 0,
			},
		},
	},

	removeCartProduct: {
		reqBody: {
			productId: "PN_612",
			quantity: "1",
		},
		output: {
			status: "success",
			message: "Product with id=PN_612 added to cart",
			updatedCart: {
				_id: "618113c061bfb76e9b17e8f8",
				cartId: "1",
				userId: "1",
				cartProducts: [
					{
						product: {
							_id: "618b6050e9c7ee6c6f489ab2",
							id: "PN_612",
							title: "This is Dummy Product",
							price: 999,
							category: "electronics",
							availability: "OutOfStock",
							createdAt: "2021-11-10T06:01:52.826Z",
							updatedAt: "2021-11-10T09:44:35.690Z",
							__v: 0,
						},
						quantity: 2,
						date: "2021-11-11T08:36:46.070Z",
						_id: "618cd846d138f2865be12b11",
					},
				],
				createdAt: "2021-11-02T10:32:32.959Z",
				updatedAt: "2021-11-11T08:45:58.812Z",
				__v: 0,
			},
		},
	},

	deleteCart: {
		reqBody: null,
		output: {
			status: "success",
			message: "Cart deleted succesfully",
			deletedCart: {
				_id: "618113c061bfb76e9b17e8f8",
				cartId: "1",
				userId: "1",
				cartProducts: [
					{
						product: {
							_id: "618b6050e9c7ee6c6f489ab2",
							id: "PN_612",
							title: "This is Dummy Product",
							price: 999,
							category: "electronics",
							availability: "OutOfStock",
							createdAt: "2021-11-10T06:01:52.826Z",
							updatedAt: "2021-11-10T09:44:35.690Z",
							__v: 0,
						},
						quantity: 2,
						date: "2021-11-11T08:36:46.070Z",
						_id: "618cd846d138f2865be12b11",
					},
				],
				createdAt: "2021-11-02T10:32:32.959Z",
				updatedAt: "2021-11-11T08:45:58.812Z",
				__v: 0,
			},
		},
	},

	// ----------------- USERS -------------------------

	signUpUser: {
		reqBody: {
			email: "test@gmail.com",
			password: "test-password",
		},
		output: {
			status: "success",
			message: "Signed up successfully",
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjcEQxQnQiLCJyb2xlIjoxLCJpYXQiOjE2MzY2MjczODksImV4cCI6MTY0MDIyNzM4OX0.gQ8SOfMogNwrVNzDaCcYwOsGOIuMb_I1p0GPhgFcT4U",
			user: {
				userId: "cpD1Bt",
				email: "test@gmail.com",
				password:
					"$2b$10$HQ/fZzvjmrscM6wxkzGrn./lbOy/beVYpfwJqtNoFSVNRyqompQ3m",
				cart: "618cf3bd143feae150b6e1aa",
				apiKey: "f5ba8a9a-3390-474a-b202-4d6d27e33336",
				token: [
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjcEQxQnQiLCJyb2xlIjoxLCJpYXQiOjE2MzY2MjczODksImV4cCI6MTY0MDIyNzM4OX0.gQ8SOfMogNwrVNzDaCcYwOsGOIuMb_I1p0GPhgFcT4U",
				],
				role: 1,
				_id: "618cf3bd143feae150b6e1ac",
				__v: 0,
			},
		},
	},

	loginUser: {
		reqBody: {
			email: "test@gmail.com",
			password: "test-password",
		},
		output: {
			status: "success",
			message: "login success",
			user: {
				_id: "618cf3bd143feae150b6e1ac",
				userId: "cpD1Bt",
				email: "new121@new.com",
				password:
					"$2b$10$HQ/fZzvjmrscM6wxkzGrn./lbOy/beVYpfwJqtNoFSVNRyqompQ3m",
				cart: "618cf3bd143feae150b6e1aa",
				apiKey: "f5ba8a9a-3390-474a-b202-4d6d27e33336",
				token: [
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjcEQxQnQiLCJyb2xlIjoxLCJpYXQiOjE2MzY2Mjc2NjYsImV4cCI6MTY0MDIyNzY2Nn0.GBk4QrJbGa6plIAE2aHsngO5mEur9grB9ol6XSWV3Eo",
				],
				role: 1,
				__v: 0,
			},
		},
	},

	logoutUser: {
		reqBody: {
			email: "test@gmail.com",
			password: "test-password",
		},
		output: {
			status: "success",
			message: "Logout Succesful! & Token deleted.",
			user: {
				_id: "618cf3bd143feae150b6e1ac",
				userId: "cpD1Bt",
				email: "new121@new.com",
				password:
					"$2b$10$HQ/fZzvjmrscM6wxkzGrn./lbOy/beVYpfwJqtNoFSVNRyqompQ3m",
				cart: "618cf3bd143feae150b6e1aa",
				apiKey: "f5ba8a9a-3390-474a-b202-4d6d27e33336",
				token: [],
				role: 1,
				__v: 0,
			},
		},
	},
};
