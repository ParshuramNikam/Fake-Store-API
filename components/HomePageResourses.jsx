import Link from 'next/link';

const HomePageResourses = () => {
    return (
        <section className="mb-10  lg:w-1/2">
            <div>
                <h1 className="text-3xl text-indigo-700 font-medium mb-3">
                    Resourses
                </h1>
                <h3 className="text-xl text-gray-700 mb-3">
                    There are 4 main resources need in shopping prototypes
                </h3>
                <div className="w-full md:w-1/2 xl:2/3 mb-4">
                    <div className="flex justify-between mb-2 text-lg">
                        <div className="text-indigo-700">Products</div>
                        <div>20 Products</div>
                    </div>
                    <div className="flex justify-between mb-2 text-lg">
                        <div className="text-indigo-700">Cart</div>
                        <div>20 Cart Items</div>
                    </div>
                    <div className="flex justify-between mb-2 text-lg">
                        <div className="text-indigo-700">Default Users</div>
                        <div>10 Default Users</div>
                    </div>
                    <div className="flex justify-between mb-2 text-lg">
                        <div className="text-indigo-700">
                            Users with <span className="font-medium">API Key</span>
                        </div>
                        <div> --- </div>
                    </div>
                </div>
                <div className="flex items-center w-max text-white py-2 px-6 mb-5 bg-indigo-500 rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-gray-100">
                    <div>
                        <Link href="/docs">
                            <a className=" text-xs font-medium text-lg">
                                View Details on Docs.
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageResourses;
