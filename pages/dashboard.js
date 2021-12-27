import PageHead from "../components/PageHead";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Nav from "../components/Nav";

const Dashboard = () => {
	const [token] = useState(Cookies.get("access_token"));
	const [userDetails, setUserDetails] = useState({});
	const [cartDetails, setCartDetails] = useState({});
	const [userProducts, setUserProducts] = useState([]);
	const [onlyUserAddedProducts, setOnlyUserAddedProducts] = useState(0);
	const router = useRouter();

	const tableHead = (quantity = false) => {
		return (
			<thead className="bg-indigo-400 text-center">
				<tr className="text-base lg:text-lg rounded">
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">ID</th>
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap w-28">Product Type</th>
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Title</th>
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Product Price</th>
					{quantity ? <th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Quantity</th> : null}
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Category</th>
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Description</th>
					<th className="px-4 lg:px-5 py-3 uppercase text-white whitespace-nowrap">Availability</th>
				</tr>
			</thead>
		)
	}

	const getUserDetails = async () => {
		await fetch('http://localhost:8000/api/auth/protected', {
			credentials: "include",
			method: "POST",
		}).then((res) => res.json())
			.then((result) => {
				if (result.status === 'success') {
					setUserDetails(result.user)
				} else {
					router.push("/user/login");
				}
			}).catch((err) => {
				console.log("Error in get User details :", err.message, err);
			})
	}

	const getCartDetails = async () => {
		console.log(token);
		await fetch(`http://localhost:8000/api/carts/by/cookie`, {
			method: "GET",
			credentials: "include"
		}).then((res) => res.json())
			.then((result) => {
				console.log("cart details :- ", result);
				if (result.status === 'success') {
					setCartDetails(result.cart)
				}
			})
			.catch((err) => console.log("Error in get cart details :", err))
	}

	const getUserAddedProducts = async () => {
		console.log(token);
		await fetch('http://localhost:8000/api/products/by/cookie', {
			method: "GET",
			credentials: "include"
		}).then((res) => res.json())
			.then(async (result) => {
				if (result.length > 0) {
					setUserProducts(result);
					console.log("Default and userAdded Products :- ", result);

					const userAddedProducts = await result.filter((product) => product.productType !== 'default');
					setOnlyUserAddedProducts(userAddedProducts);
					console.log("Only userAdded Products :- ", userAddedProducts);
				}
			})
			.catch((err) => console.log("Error in get UserAddedProducts :", err))
	}

	const userDatailsItem = (title, value) => {
		return <div className="flex flex-wrap my-5 gap-x-5 md:gap-x-8 items-center">
			<div className="font-medium text-blue-700 text-lg">
				{title} :
			</div>
			<div className="text-left">{value}</div>
		</div>
	};

	const cardDetailsItem = (title, value) => {
		return <> <div className="w-full m-2 h-36 my-3 border-b-4 border-indigo-600 m-auto text-center flex flex-col item-center lg:items-center justify-center bg-white rounded shadow-lg p-8 md:mx-3">
			<div className="flex lg:flex-wrap gap-5 md:gap-10 items-center justify-center">
				<div className="text-indigo-600">
					{
						title !== "Your Products"
							? <div className="p-3 rounded-full bg-indigo-500 bg-opacity-75">
								<svg className="h-10 w-10 text-white" viewBox="0 0 28 28" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"></path>
									<path d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z" fill="currentColor"></path>
									<path d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z" fill="currentColor"></path>
								</svg>
							</div>
							: <div className="p-3 rounded-full bg-indigo-500 bg-opacity-80">
								<svg className="h-10 w-10 text-white" viewBox="0 0 28 28" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
									<path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" strokeWidth="2"></path>
								</svg>
							</div>
					}
				</div>
				<div>
					<div className="text-2xl text-indigo-700 font-semibold mb-5">
						{title}
					</div>
					<div className="text-2xl font-semibold">
						{value}
					</div>
				</div>
			</div>
		</div>
		</>
	}

	useEffect(() => {
		if (!token) {
			router.push("/user/login");
		} else {
			getUserDetails();
			getCartDetails();
			getUserAddedProducts();
			console.log("Cart Details :", cartDetails);
			console.log("User Products :", userProducts);
		}
	},[]);

	// ---------------------------------------------------------------------------------

	// if user don't have TOKEN then redirect him to "Login" page
	if (!Cookies.get("access_token")) {
		return <section className="text-center font-semibold text-gray-600">Redirecting...</section>;
	}

	return (
		<>
			<PageHead title={'User Dashboard | Fake Store API'}/>
			<section className="min-h-screen bg-white">
				<Nav />
				{token ? (
					<>
						<div className="lg:flex xl:w-9/12 mx-auto">
							{userDetails !== {}
								?
								<div className="w-100  lg:w-1/2 m-2 mt-3 md:m-3 text-center md:p-5 lg:p-7">
									<div className="mx-auto h-full max-w-2xl bg-white shadow-lg p-3 md:p-5 lg:p-9">
										<div className="mx-auto max-w-max">
											{userDatailsItem("User ID", userDetails.userId)}
											{userDatailsItem("Cart ID", userDetails.userId)}
											{userDatailsItem("API Key", userDetails.apiKey)}
											{userDatailsItem("Email ID", userDetails.email)}
										</div>
									</div>
								</div>
								: null
							}
							{< div className="w-full lg:w-1/2 md:flex lg:flex-wrap p-3 md:p-5">
								{/* {userProducts && cardDetailsItem("Your Products", userProducts.length)} */}
								{cardDetailsItem("Your Products", onlyUserAddedProducts.length)}
								{cartDetails && cartDetails.cartProducts && cardDetailsItem("Products in Cart", cartDetails.cartProducts.length)}
							</div>
							}
						</div>

						{
							onlyUserAddedProducts.length > 0 && <>
								<div className="mt-7 mx-2 text-center lg:mx-4 mx-1 font-semibold text-indigo-500 text-lg md:text-xl">Your Added Products</div>
								<div className="overflow-auto mb-7">
									<div className="mx-1">
										<table className="mx-auto rounded shadow-lg rounded-t-2xl mt-2">
											{tableHead(false)}
											<tbody className="bg-white">
												{
													onlyUserAddedProducts.map((product, index) => {
														return (<tr key={index} className={`text-left border border-gray-200 ${index % 2 !== 0 ? 'bg-gray-100' : null}`}>
															<td className="px-4 lg:px-5 py-2 ">{product.id}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.productType}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.title}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.price}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.category}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.description}</td>
															<td className="px-4 lg:px-5 py-2 ">{product.availability}</td>
														</tr>
														)
													})
												}
											</tbody>
										</table>
									</div>
								</div>
							</>
						}
					</>
				) : null}

				{
					cartDetails.cartProducts && cartDetails.cartProducts.length > 0
						? <>
							<div className="mt-10 mx-2 lg:mx-4 text-center mx-1 font-semibold text-indigo-600 text-lg md:text-xl">Products in your Cart</div>
							<div className="overflow-auto mb-7">
								<div className="mx-1">
									<table className="mx-auto rounded shadow rounded-t-2xl mt-2">
										{tableHead(true)}
										<tbody className="bg-white">
											{cartDetails.cartProducts.map((item, index) =>
												<tr key={index} className={`text-left border border-gray-200 ${index % 2 !== 0 ? 'bg-gray-100' : null}`}>
													<td className="px-4 lg:px-5 py-2 ">{item.product.id}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.productType}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.title}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.price}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.quantity}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.category}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.description}</td>
													<td className="px-4 lg:px-5 py-2 ">{item.product.availability}</td>
												</tr>
											)}

										</tbody>
									</table>
								</div>
							</div>
						</>
						: null
				}
				<div className="mt-5 h-2">{''}</div>
			</section >
		</>
	);
};
export default Dashboard;

