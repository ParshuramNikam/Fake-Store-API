import Link from 'next/link'

const errorPage = () => {
    return (
        <div className="p-2 flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400" >
            <div className=" px-10 py-8 max-w-2xl md:px-40 md:py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-blue-600 text-7xl md:text-9xl">404</h1>

                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-red-500">Oops!</span> Page not found
                    </h6>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <Link href={'/'} >
                        <a className="px-7 py-2 font-semibold transition duration-150 ease-in-out text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded shadow-lg shadow-indigo-400" >
                            Go Home
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default errorPage
