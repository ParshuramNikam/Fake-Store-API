import Image from 'next/image'
import { productData, cartData, userData } from '../src/Data/fetchOptionsData.js';
import ReqResWrapper from './ReqResWrapper.jsx';

const DocsContent = () => {
    return (
        <section className="w-full lg:w-11/12">
            <h1 className="text-2xl md:text-3xl mb-4 mt-10 flex items-center text-left gap-3 font-medium cursor-pointer text-indigo-500">
                <Image src="/square-box.svg" alt='🟦' width="30" height="30" color="#3f51b5" />
                <span>Products</span>
            </h1>

            <div className="mb-7 p-4 bg-blue-100 text-blue-600 font-medium rounded">
                <div className="mb-1.5">
                    Users having API key can add, update, delete a product in the Database using their API key.<br />
                    You can pass in the API Key to our APIs either by using the Authorization (Bearer Token) header or by sending an <strong className="underline text-blue-800">apiKey</strong> parameter via the query string or request body.
                </div>
                <div className="mb-2"><strong>But, note that these added products will get automatically deleted from databse after 48hours!</strong></div>
                <div>Test userId = test-user</div>
                <div>Test apiKey of this user = b3efbc4b-f835-4909-ae67-223e9d96d626</div>
            </div>

            <div className="mb-5 font-medium">
                <span className="relative top-1.5 mr-2.5">
                    <Image src="/exclamation-mark.png" alt='!' width="25" height="25" />
                </span>
                    If you don&apos;t provide API Key, then you will get default products only. 
                    With API key can get both your added products and default products.
            </div>

            {
                productData.map((data) => (
                    <ReqResWrapper key={data.id}
                        heading={data.heading}
                        endpoint={data.endpoint}
                        id={data.id}
                        note={data.note}
                        impNote={data.impNote}
                        reqOptions={data.reqOptions}
                        cutOutput={data.cutOutput}
                        output={data.output} />
                ))
            }

            {/* ============================================================================================================== */}

            <h1 className="text-2xl md:text-3xl mb-4 mt-10 flex items-center text-left gap-3 font-medium cursor-pointer text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Cart</span>
            </h1>

            <div className="mb-7 p-4 bg-blue-100 text-blue-600 font-medium rounded">
                <div className="mb-1.5">
                    Users can add, remove products from their cart, using their API Key.<br />
                    You can pass in the API Key to our APIs either by using the Authorization (Bearer Token) header or by sending an <strong className="underline text-blue-800">apiKey</strong> parameter via the query string or request body.
                </div>
                <div className="mb-2"><strong>But, note that these <strong>cartProducts</strong> will get automatically empty from databse after 48hours of adding product into cart!</strong></div>
                <div>Test userId = test-user</div>
                <div>Test apiKey of this user = b3efbc4b-f835-4909-ae67-223e9d96d626</div>
            </div>

            <div className="mb-6 font-medium">
                <span className="relative top-1.5 mr-2.5">
                    <Image src="/exclamation-mark.png" alt="!" width="25" height="25" />
                </span>
                Without API key you will get response of only default user&apos;s cart.
                If you wants to get your cart along with default carts then you must have to send apiKey
            </div>

            {
                cartData.map((data) => {
                    return (
                        <ReqResWrapper key={data.id}
                            heading={data.heading}
                            endpoint={data.endpoint}
                            id={data.id}
                            note={data.note}
                            impNote={data.impNote}
                            reqOptions={data.reqOptions}
                            cutOutput={data.cutOutput}
                            output={data.output}
                        />
                    );
                })
            }

            {/* ============================================================================================================== */}

            <h1 className="text-2xl md:text-3xl mb-4 mt-10 flex items-center text-left gap-3 font-medium cursor-pointer text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Users</span>
            </h1>

            {
                userData.map(data => (
                    <ReqResWrapper key={data.id}
                        heading={data.heading}
                        endpoint={data.endpoint}
                        id={data.id}
                        note={data.note}
                        impNote={data.impNote}
                        reqOptions={data.reqOptions}
                        cutOutput={data.cutOutput}
                        output={data.output}
                        lastNote={data.lastNote}
                    />
                ))
            }


        </section>
    )
}

export default DocsContent
