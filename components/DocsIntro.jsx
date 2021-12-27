import AlertGetApiKey from './AlertGetApiKey';

const DocsIntro = () => {
    return (
        <>
            <section className="p-2 md:p-4 my-2 py-14 md:py-12 px-3 md:px-6  flex align-center">
                <main className="my-auto">
                    <h1 className="text-3xl md:text-4xl mb-3 font-medium text-indigo-500">How we use it.</h1>
                    <h3 className="text-lg text-grey-500 w-full md:w-2/3">
                        fakeStoreApi can be used with any type of shopping project that needs products, carts, and
                        users in JSON format. you can use examples below to check how fakeStoreApi works and feel
                        free to enjoy it in your awesome projects!
                    </h3>
                </main>
            </section>
            <AlertGetApiKey />
        </>
    )
}

export default DocsIntro
