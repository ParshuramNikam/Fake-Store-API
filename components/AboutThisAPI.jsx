const AboutThisAPI = () => {
    return (
        <>
            <section className="mb-14 mx-0 md:text-center">
                <h1 className="text-lg text-center md:text-3xl px-2 font-medium mb-4 mt-10">
                    Use our REST API to develop your own application
                </h1>

                <p className="text-sm  md:text-lg  w-full mx-auto md:w-12/12 mb-1">
                    With the FakeStores REST API you can do all the things that our website can do. We use the API to build an e-commerce store. Search for products, view product details, get categories, retrieve all the tags and add to users basket.
                </p>
                <p className="text-sm  md:text-lg  w-full mx-auto md:w-112/12 mb-3">
                    Everything in JSON format so it’s easy to read, both for humans and computer, enabling you to do what ever you can imagine
                </p>

                {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

                <div className="flex flex-wrap -m-4 mt-7">
                    <div className="lg:w-1/3 sm:w-1/2 p-4 transform transition duration-500 hover:scale-105 cursor-pointer">
                        <div className="flex relative">
                            <div className="px-8 py-10  relative z-10 w-full border-4 border-gray-200 rounded bg-white text-center card">
                                <div className="mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mx-auto" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
                                    </svg>
                                </div>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">REST API</h1>
                                <p className="leading-relaxed">Restful online API, publicly accessible via https
                                    methods.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2  p-4">
                        <div className="flex relative transform transition duration-500 hover:scale-105 cursor-pointer">
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded bg-white text-center card">
                                <div className="mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mx-auto" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
                                        <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"></path>
                                    </svg>
                                </div>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">JSON DATA</h1>
                                <p className="leading-relaxed">Contain neccessary data required to build Shopping website.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2  p-4">
                        <div className="flex relative transform transition duration-500 hover:scale-105 cursor-pointer">
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded bg-white text-center card">
                                <div className="mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mx-auto" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"></path>
                                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"></path>
                                    </svg>
                                </div>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> 24/7 uptime</h1>
                                <p className="leading-relaxed">Fast response time in your testing &amp; developement phases.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

                <div className="mt-10l text-left">
                    <h1 className="text-3xl text-indigo-700 font-medium mb-4 mt-10">
                        Getting Started
                    </h1>
                    <ul className="ml-5 list-decimal">
                        <li >First step is to read over the API information below and get familiar with it.</li>
                        <li >Try our API for your self. You don’t need API key to play with it.</li>
                        <li >Do you like what you can do? Get you API key here.</li>
                        <li >Check out the FAQ for the most common questions. If it´s not there, email us.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AboutThisAPI
