import Link from 'next/link';

const HomePageRoutes = () => {

    const RoutesData = [
        {
            method: "GET",
            route: "/products"
        },
        {
            method: "GET",
            route: "/products/1"
        },
        {
            method: "GET",
            route: "/categories"
        },
        {
            method: "GET",
            route: "/category/electronics"
        },
        {
            method: "GET",
            route: "/cart?userId=1"
        },
        {
            method: "GET",
            route: "/products?limit=5"
        },
        {
            method: "GET",
            route: "/products?sortBy='desc'"
        },
        {
            method: "PUT",
            route: "/update/1"
        },
        {
            method: "POST",
            route: "/addProduct"
        },
        {
            method: "DELETE",
            route: "/delete/1"
        },
    ]

    return (
        <section className="mb-10 lg:w-1/2">
            <h1 className="text-3xl text-indigo-700 font-medium mb-3">
                Routes
            </h1>
            <h3 className="text-xl text-gray-700 mb-5">
                All the HTTP methods are supported.
            </h3>
            <div className="w-full md:w-3/5 mb-4">
                {
                    RoutesData.map((data, index) => {
                        return (
                            <div key={index.toString()} className="flex justify-between mb-2 text-lg">
                                {/* <Link href={`https://fakestoreapi.com${data.route}`}> */}
                                    {/* <a> */}
                                        <div className="text-indigo-700">{data.method}</div>
                                    {/* </a> */}
                                {/* </Link> */}
                                <div>{data.route}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className=" w-max text-white py-2 px-6 mb-5 bg-indigo-500 rounded shadow cursor-pointer hover:bg-indigo-600">
                <div>
                    <Link href="/docs">
                        <a className=" text-xs font-medium text-lg">
                            View Details on Docs.
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomePageRoutes
