const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer b3efbc4b-f835-4909-ae67-223e9d96d626",
}

const productData = [
    {
        heading: "Get all products",
        endpoint: "/products",
        id: "p-all",
        // note: "If you don't provide API Key, then you will get default products only. With API key can get both your added products and defaut products.",
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: reqHeaders,
        },
        cutOutput: true,
        output: [
            {
                id: '1',
                productType: 'default',
                title: 'White Gold Plated Princess',
                price: 99,
                description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                category: 'jewelery',
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: 'InStock',
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
            {
                id: '5LyQpt',
                addedByUser: 'test-user',
                productType: 'userAdded',
                title: 'test product',
                price: 1000,
                description: 'This is a test product.',
                category: 'electronics',
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: 'InStock',
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            }
        ]
    },
    {
        heading: "Get a single product",
        endpoint: "/products/5LyQpt",
        id: "p-single",
        // note: "Without apiKey you can get only default product. To get your added product you must send your apiKey.",
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: false,
        output: {
            "id": "5LyQpt",
            "addedByUser": "test-user",
            "productType": "userAdded",
            "title": "test product",
            "price": 1000,
            "description": "This is a test product.",
            "category": "electronics",
            "imageURL": "https://via.placeholder.com/350/6366f1",
            "rating": 4.2,
            "availability": "InStock",
            "seller": "FakeStore",
            "source": "https://www.flipkart.com/"
        }
    },
    {
        heading: "Limit results",
        endpoint: "/products?limit=5",
        id: "p-limit",
        note: null,
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: true,
        output: [
            {
                id: '1',
                productType: 'default',
                title: 'White Gold Plated Princess',
                price: 99,
                description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                category: 'jewelery',
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: 'InStock',
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
            {
                "id": "5",
                "productType": "default",
                "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "price": 300,
                "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                "category": "electronics",
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: "InStock",
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
        ]
    },
    {
        heading: "Sort results",
        endpoint: "/products?sort='desc",
        id: "p-sort",
        note: "You can use with 'desc' or 'asc' as you want.",
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: true,
        output: [
            {
                "id": "5",
                "productType": "default",
                "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "price": 300,
                "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                "category": "electronics",
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: "InStock",
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
            {
                id: '1',
                productType: 'default',
                title: 'White Gold Plated Princess',
                price: 99,
                description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                category: 'jewelery',
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: 'InStock',
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
        ]
    },
    {
        heading: "Get all categories",
        endpoint: "/categories",
        id: "p-categories",
        note: null,
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: null
        },
        cutOutput: false,
        output: [
            "electronics",
            "mensClothing",
            "womensClothing",
            "jewelery",
            "books",
            "grocery",
            "luggageAndBags",
            "personalCare",
            "kids",
            "sportsFitnessOutdoors",
        ]
    },
    {
        heading: "Get products in a specific category",
        endpoint: "/products/category/electronics",
        id: "p-category",
        note: 'You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results.',
        impNote: null,
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: true,
        output: [
            {
                "id": "5",
                "productType": "default",
                "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
                "price": 300,
                "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                "category": "electronics",
                imageURL: 'https://via.placeholder.com/350/6366f1',
                rating: 4.2,
                availability: "InStock",
                seller: 'FakeStore',
                source: 'https://www.flipkart.com/'
            },
            {
                "id": "5LyQpt",
                "addedByUser": "test-user",
                "productType": "userAdded",
                "title": "test product",
                "price": 1000,
                "description": "This is a test product.",
                "category": "electronics",
                "availability": "InStock",
                "rating": 4.2,
                "imageURL": "https://via.placeholder.com/350/6366f1",
                "seller": "FakeStore",
                "source": "https://www.flipkart.com/"
            }
        ]
    },
    {
        heading: "Add new product",
        endpoint: "/product/add/",
        id: "p-new",
        note: 'If you try to add new product without valid apiKey, then response will be "You don\'t have permission! Please Provide apiKey".',
        impNote: "Title, Price, Category these fileds are required in request body! If you do not mention an Id in request body, then 6char Id will be created automatically. You can set availability as 'OutOfStock', by default is 'InStock'",
        reqOptions: {
            method: "POST",
            headers: reqHeaders,
            body: {
                "title": "test product",
                "price": 1000,
                "description": "This is a test product.",
                "category": "electronics",
                "imageURL": "https://via.placeholder.com/350/6366f1",
                "rating": 4.2,
                "availability": "InStock",
                "seller": "FakeStore",
                "source": "https://www.flipkart.com/"
            },
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Product saved successfully",
            "savedProduct": {
                "id": "5LyQpt",
                "addedByUser": "test-user",
                "productType": "userAdded",
                "title": "test product",
                "price": 1000,
                "description": "This is a test product.",
                "category": "electronics",
                "availability": "InStock",
                "rating": 4.2,
                "imageURL": "https://via.placeholder.com/350/6366f1",
                "seller": "FakeStore",
                "source": "https://www.flipkart.com/"
            }
        }
    },
    {
        heading: "Update a product by Id",
        endpoint: "/products/update/5LyQpt",
        id: "p-update",
        note: 'It will return you a response with updated product details. If you try to update a product without valid apiKey, then response will be "You don\'t have permission! Please Provide apiKey".',
        impNote: "User can update only his/her added product.",
        reqOptions: {
            method: "PATCH",
            headers: reqHeaders,
            body: {
                "title": "Updated test product",
                "price": 999,
                "description": "This is updated test product.",
                "rating": 4.5,
                "availability": "OutOfStock",
            },
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Product saved successfully",
            "savedProduct": {
                "id": "5LyQpt",
                "addedByUser": "test-user",
                "productType": "userAdded",
                "title": "Updated test product",
                "price": 999,
                "description": "This is updated test product.",
                "category": "electronics",
                "availability": "OutOfStock",
                "rating": 4.5,
                "imageURL": "https://via.placeholder.com/350/6366f1",
                "seller": "FakeStore",
                "source": "https://www.flipkart.com/"
            }
        }
    },
    {
        heading: "Delete a product by Id",
        endpoint: "/products/delete/5LyQpt",
        id: "p-delete",
        note: "If you try to update a product without valid apiKey, then response will be \"You don\'t have permission! Please Provide apiKey\"",
        impNote: "User can delete only his/her added products.",
        reqOptions: {
            method: "DELETE",
            headers: reqHeaders
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Product deleted succesfully",
            "deletedProduct": {
                "id": "5LyQpt",
                "addedByUser": "test-user",
                "productType": "userAdded",
                "title": "Updated test product",
                "price": 999,
                "description": "This is updated test product.",
                "category": "electronics",
                "availability": "OutOfStock",
                "rating": 4.5,
                "imageURL": "https://via.placeholder.com/350/6366f1",
                "seller": "FakeStore",
                "source": "https://www.flipkart.com/"
            }
        }
    },
];

const cartData = [
    {
        heading: "Get all Carts",
        endpoint: "/carts",
        id: "c-all",
        note: null,
        // impNote: "Without API key you will get response of only default user's cart. If you wants to get your cart along with default carts then you must have to send apiKey.",
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: true,
        output: [
            {
                "cartId": "default1",
                "userId": "default1",
                "cartType": "default",
                "cartProducts": [
                    {
                        "product": {
                            "id": "7",
                            "productType": "default",
                            "title": "White Gold Plated Princess",
                            "price": 9,
                            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                            "category": "jewelery",
                            "availability": "InStock",
                        },
                        "quantity": 8,
                        "date": "2021-12-01T10:15:05.832Z"
                    },
                    {
                        "product": {
                            "id": "5",
                            "productType": "default",
                            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                            "price": 695,
                            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                            "category": "jewelery",
                            "availability": "InStock",
                        },
                        "quantity": 1,
                        "date": "2021-12-01T10:15:05.832Z"
                    }
                ],
                "firstProductAddedToCartAt": "2021-12-01T10:27:02.420Z"
            },
            {
                "_id": "61a7150c8d9973a5cd30fbee",
                "cartId": "test-user",
                "userId": "test-user",
                "cartType": "userAdded",
                "cartProducts": [
                    {
                        "product": {
                            "_id": "61976dcbe72f0516218fbdf1",
                            "id": "5",
                            "productType": "default",
                            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                            "price": 695,
                            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                            "category": "jewelery",
                            "availability": "InStock",
                        },
                        "quantity": 1,
                        "date": "2021-12-01T10:15:05.832Z",
                        "_id": "61a74efc1cddaca2494c6ddf"
                    },
                    {
                        "product": {
                            "_id": "61a744ad5e6af1fe8fa5bd64",
                            "id": "5LyQpt",
                            "addedByUser": "test-user",
                            "productType": "userAdded",
                            "title": "Updated test product.",
                            "price": 1000,
                            "description": "This a updated test product",
                            "category": "electronics",
                            "imageURL": "https://via.placeholder.com/350/6366f1",
                            "rating": 4.2,
                            "availability": "OutOfStock",
                            "seller": "FakeStore",
                            "source": "https://www.flipkart.com/",
                        },
                        "quantity": 10,
                        "date": "2021-12-01T10:15:05.832Z",
                        "_id": "61a74f181cddaca2494c6deb"
                    }
                ],
                "__v": 0,
                "firstProductAddedToCartAt": "2021-12-01T10:31:24.258Z"
            }

        ]

    },
    {
        heading: "Get a single Cart",
        endpoint: "/carts/test-user",
        id: "c-single",
        note: null,
        // impNote: "If you wants to get your cart, then you must send API key.",
        reqOptions: {
            method: "GET",
            headers: reqHeaders
        },
        cutOutput: false,
        output: {
            "_id": "61a7150c8d9973a5cd30fbee",
            "cartId": "test-user",
            "userId": "test-user",
            "cartType": "userAdded",
            "cartProducts": [
                {
                    "product": {
                        "_id": "61976dcbe72f0516218fbdf1",
                        "id": "5",
                        "productType": "default",
                        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                        "price": 695,
                        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                        "category": "jewelery",
                        "availability": "InStock",
                    },
                    "quantity": 1,
                    "date": "2021-12-01T10:15:05.832Z",
                    "_id": "61a74efc1cddaca2494c6ddf"
                },
                {
                    "product": {
                        "_id": "61a744ad5e6af1fe8fa5bd64",
                        "id": "5LyQpt",
                        "addedByUser": "test-user",
                        "productType": "userAdded",
                        "title": "Updated test product.",
                        "price": 1000,
                        "description": "This a updated test product",
                        "category": "electronics",
                        "imageURL": "https://via.placeholder.com/350/6366f1",
                        "rating": 4.2,
                        "availability": "OutOfStock",
                        "seller": "FakeStore",
                        "source": "https://www.flipkart.com/",
                    },
                    "quantity": 10,
                    "date": "2021-12-01T10:15:05.832Z",
                    "_id": "61a74f181cddaca2494c6deb"
                }
            ],
            "__v": 0,
            "firstProductAddedToCartAt": "2021-12-01T10:31:24.258Z"
        }
    },
    {
        heading: "Add product to cart",
        endpoint: "/cart/product/add/test-user",
        id: "c-add",
        note: null,
        impNote: "You can add products to your cart only, using your API key.",
        reqOptions: {
            method: "PATCH",
            headers: reqHeaders,
            body: {
                "productId": "RMoJhx",
                "quantity": 2
            }
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Product with id=RMoJhx added to cart",
            "cart": [
                {
                    "_id": "61a7150c8d9973a5cd30fbee",
                    "cartId": "test-user",
                    "userId": "test-user",
                    "cartType": "userAdded",
                    "cartProducts": [
                        {
                            "product": {
                                "_id": "61a743d9ddfaa41f9e3348b3",
                                "id": "RMoJhx",
                                "addedByUser": "test-user",
                                "productType": "userAdded",
                                "title": "test product",
                                "price": 1000,
                                "description": "This is a test product.",
                                "category": "electronics",
                                "rating": 4.2,
                                "availability": "InStock",
                                "seller": "FakeStore",
                                "createdAt": "2021-12-01T09:43:53.518Z",
                                "updatedAt": "2021-12-01T09:43:53.518Z",
                                "__v": 0
                            },
                            "quantity": 2,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a751491cddaca2494c6e0f"
                        },
                        {
                            "product": {
                                "_id": "61976dcbe72f0516218fbdf1",
                                "id": "5",
                                "productType": "default",
                                "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                                "price": 695,
                                "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                                "category": "jewelery",
                                "availability": "InStock",
                                "createdAt": "2021-11-19T09:26:35.930Z",
                                "updatedAt": "2021-11-19T09:26:35.930Z",
                                "__v": 0
                            },
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74efc1cddaca2494c6ddf"
                        },
                        {
                            "product": {
                                "_id": "61a744ad5e6af1fe8fa5bd64",
                                "id": "5LyQpt",
                                "addedByUser": "test-user",
                                "productType": "userAdded",
                                "title": "Updated test product.",
                                "price": 1000,
                                "description": "This a updated test product",
                                "category": "electronics",
                                "imageURL": "https://via.placeholder.com/350/6366f1",
                                "rating": 4.2,
                                "availability": "OutOfStock",
                                "seller": "FakeStore",
                                "source": "https://www.flipkart.com/",
                                "createdAt": "2021-12-01T09:47:25.568Z",
                                "updatedAt": "2021-12-01T10:18:44.294Z",
                                "__v": 0
                            },
                            "quantity": 20,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74f181cddaca2494c6deb"
                        },
                    ],
                    "__v": 0,
                    "firstProductAddedToCartAt": "2021-12-01T10:31:24.258Z"
                }
            ]
        }
    },
    {
        heading: "Remove product from cart",
        endpoint: "/cart/product/remove/test-864",
        id: "c-remove",
        note: null,
        impNote: "You can remove products from your cart only, using your API key.",
        reqOptions: {
            method: "PATCH",
            headers: reqHeaders,
            body: {
                "productId": "RMoJhx",
                "quantity": 1
            }
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Product with id=RMoJhx added to cart",
            "cart": [
                {
                    "_id": "61a7150c8d9973a5cd30fbee",
                    "cartId": "test-user",
                    "userId": "test-user",
                    "cartType": "userAdded",
                    "cartProducts": [
                        {
                            "product": {
                                "_id": "61a743d9ddfaa41f9e3348b3",
                                "id": "RMoJhx",
                                "addedByUser": "test-user",
                                "productType": "userAdded",
                                "title": "test product",
                                "price": 1000,
                                "description": "This is a test product.",
                                "category": "electronics",
                                "rating": 4.2,
                                "availability": "InStock",
                                "seller": "FakeStore",
                                "createdAt": "2021-12-01T09:43:53.518Z",
                                "updatedAt": "2021-12-01T09:43:53.518Z",
                                "__v": 0
                            },
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a751491cddaca2494c6e0f"
                        },
                        {
                            "product": {
                                "_id": "61976dcbe72f0516218fbdf1",
                                "id": "5",
                                "productType": "default",
                                "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                                "price": 695,
                                "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                                "category": "jewelery",
                                "availability": "InStock",
                                "createdAt": "2021-11-19T09:26:35.930Z",
                                "updatedAt": "2021-11-19T09:26:35.930Z",
                                "__v": 0
                            },
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74efc1cddaca2494c6ddf"
                        },
                        {
                            "product": {
                                "_id": "61a744ad5e6af1fe8fa5bd64",
                                "id": "5LyQpt",
                                "addedByUser": "test-user",
                                "productType": "userAdded",
                                "title": "Updated test product.",
                                "price": 1000,
                                "description": "This a updated test product",
                                "category": "electronics",
                                "imageURL": "https://via.placeholder.com/350/6366f1",
                                "rating": 4.2,
                                "availability": "OutOfStock",
                                "seller": "FakeStore",
                                "source": "https://www.flipkart.com/",
                                "createdAt": "2021-12-01T09:47:25.568Z",
                                "updatedAt": "2021-12-01T10:18:44.294Z",
                                "__v": 0
                            },
                            "quantity": 20,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74f181cddaca2494c6deb"
                        },
                    ],
                    "__v": 0,
                    "firstProductAddedToCartAt": "2021-12-01T10:31:24.258Z"
                }
            ]
        }
    },
    // there is one more route in carts -> delete cart -> cart delete with user deleted from DB.
];

const userData = [
    {
        heading: "User Sign Up",
        endpoint: "/auth/signup",
        id: "u-signup",
        note: null,
        impNot: null,
        reqOptions: {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "email": "test@test.com",
                "password": "test"
            },
        },
        cutOutput: false,
        lastNote: "Email will sent to the user's emailID with verification Link. After clicking on that link user will get verified! and now user can login with email and password.",
        output: {
            "status": "success",
            "message": "Email is sent to user. Check your Email and verify your credentials!"
        },
    },
    {
        heading: "User Log In",
        endpoint: "/auth/login",
        id: "u-login",
        note: null,
        impNote: null,
        reqOptions: {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "email": "test@test.com",
                "password": "test"
            }
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "login success",
            "user": {
                "userId": "test-user",
                "email": "test@test.com",
                "apiKey": "b3efbc4b-f835-4909-ae67-223e9d96d626",
                "cart": "61a7150c8d9973a5cd30fbee"
            }
        },
    },
    {
        heading: "User Logout",
        endpoint: "/auth/logout",
        id: "u-logout",
        note: null,
        impNote: null,
        reqOptions: {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "email": "test@test.com",
                "password": "test"
            },
        },
        cutOutput: false,
        output: {
            "status": "success",
            "message": "Logout Succesful! & Token deleted.",
            "user": {
                "userId": "TDmQZU",
                "email": "test@test.com",
                "apiKey": "d0cd5940-1f0f-468b-9d6d-71bca235e62e",
                "cart": {
                    "cartId": "test-user",
                    "userId": "test-user",
                    "cartType": "userAdded",
                    "cartProducts": [],
                }
            }
        },
    },
    {
        heading: "Get all Users.",
        endpoint: "/users/",
        id: "u-all",
        note: null,
        impNote: "Without API key you will get default users only.",
        reqOptions: {
            method: "GET",
            headers: reqHeaders,
        },
        cutOutput: true,
        output: [
            {
                "userId": "default1",
                "email": "default1@default.com",
                "cart": {
                    "_id": "619769b7b67e377603c0abce",
                    "cartId": "default1",
                    "userId": "default1",
                    "cartType": "default",
                    "cartProducts": [
                        {
                            "product": "61976dcbe72f0516218fbdef",
                            "quantity": 8,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74df61cddaca2494c6dbd"
                        },
                        {
                            "product": "61976dcbe72f0516218fbdf1",
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74e071cddaca2494c6dc9"
                        }
                    ],
                    "__v": 0,
                    "firstProductAddedToCartAt": "2021-12-01T10:27:02.420Z"
                },
                "apiKey": null
            },
            {
                userId: 'test-user',
                email: 'test@test.com',
                apiKey: 'b3efbc4b-f835-4909-ae67-223e9d96d626',
                cart: {
                    cartId: 'test-user',
                    userId: 'test-user',
                    cartType: 'userAdded',
                    "cartProducts": [
                        {
                            "product": "61a744ad5e6af1fe8fa5bd64",
                            "quantity": 20,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74f181cddaca2494c6deb"
                        },
                        {
                            "product": "61a743d9ddfaa41f9e3348b3",
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a751491cddaca2494c6e0f"
                        }
                    ],
                    __v: 0,
                    firstProductAddedToCartAt: '2021-12-01T10:31:24.258Z'
                }
            },
        ]
    },
    {
        heading: "Get a single User.",
        endpoint: "/users/test-user/",
        id: "u-single",
        note: null,
        impNote: "to get your user details you have to send apiKey.",
        reqOptions: {
            method: "GET",
            headers: reqHeaders,
        },
        cutOutput: false,
        output: {
            "status": "success",
            "user": {
                "userId": "test-user",
                "email": "test@test.com",
                "apiKey": "b3efbc4b-f835-4909-ae67-223e9d96d626",
                "cart": {
                    "_id": "61a7150c8d9973a5cd30fbee",
                    "cartId": "test-user",
                    "userId": "test-user",
                    "cartType": "userAdded",
                    "cartProducts": [
                        {
                            "product": "61a744ad5e6af1fe8fa5bd64",
                            "quantity": 20,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a74f181cddaca2494c6deb"
                        },
                        {
                            "product": "61a743d9ddfaa41f9e3348b3",
                            "quantity": 1,
                            "date": "2021-12-01T10:15:05.832Z",
                            "_id": "61a751491cddaca2494c6e0f"
                        }
                    ],
                    "__v": 0,
                    "firstProductAddedToCartAt": "2021-12-01T10:31:24.258Z"
                }
            }
        }
    },
]



const prototype = {
    heading: "",
    endpoint: "",
    note: null,
    impNote: null,
    reqOptions: {
        method: "GET",
        headers: reqHeaders,
    },
    cutOutput: false,
    output: {}
}

export { productData, cartData, userData };