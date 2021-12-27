import HomePageResourses from "./HomePageResourses"
import HomePageRoutes from "./HomePageRoutes"
import AboutThisAPI from "./AboutThisAPI"
import ReqResWrapper from "./ReqResWrapper"

const reqData = {
    endpoint: "/products/5",
    id: "",
    note: null,
    impNote: null,
    reqOptions: {
        method: "GET",
        headers: null,
    },
    cutOutput: false,
    output: {
        id: "5",
        availability: "InStock",
        category: "jewelery",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        price: 695,
        productType: "default",
        rating: { rate: 4.6, count: 420 },
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    }

}

const HomePageShortDoc = () => {
    return (
        <>
            <div className="text-lg">
                <span className="text-gray-600 font-semibold">{'➜'}</span>
                Example: Get a single product by ID
            </div>
            <ReqResWrapper heading={reqData.heading} endpoint={reqData.endpoint} reqOptions={reqData.reqOptions} output={reqData.output} />
            <AboutThisAPI />
            <div className="lg:flex gap-10 justify-center">
                <HomePageResourses />
                <HomePageRoutes />
            </div>
        </>
    )
}

export default HomePageShortDoc
