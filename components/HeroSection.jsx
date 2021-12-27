import Image from "next/image"
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className=" py-14 md:py-20 ">  {/*  min-h-screen */}
            <div className="flex flex-wrap justify-between items-center">
                <div className="intro md:w-7/12">
                    <h1 className="text-5xl font-medium mb-3 md:mb-5 lg:mb-7 md:text-6xl lg:text-7xl">FakeStores API</h1>
                    <h3 className="text-xl mb-5 md:text-2xl lg:text-3xl">Fake Stores rest API for your e-commerce or shopping website prototype</h3>

                    <div className="my-3 flex flex-wrap gap-4">
                        <div className="w-3/2">
                            <div className="flex items-center text-gray-100 py-3.5 px-5 bg-indigo-400 rounded-lg shadow cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
                                <svg className="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <div className=" text-xs font-medium ml-2 text-xl w-36 mr-1.5">
                                    <Link href="https://github.com/ParshuramNikam">
                                        <a>
                                            View on GitHub
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/2">
                            <div className="flex items-center text-gray-100 py-3.5 px-5 bg-yellow-400 bg-yellow-400 rounded-lg shadow cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <div className=" text-xs font-medium ml-2 text-xl w-36">
                                    <Link href="/docs">
                                        <a>
                                            Read Docs.
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero my-auto mx-auto md:w-5/12 text-center">
                    <Image src="/hero.svg" alt="HeoImg" width="400" height="400"></Image>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
