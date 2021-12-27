import Link from "next/link";
import Image from "next/image"

const AlertGetApiKey = () => {
    return (
        <section className="w-full lg:w-11/12 bg-red-100 text-red-500 rounded flex items-center px-4 py-3 md:px-5 mb-14 text-xl md:text-2xl font-semibold">
            <div className="text-red-500 mr-5">
                <span className="relative top-0.5"><Image src="/exclamation-mark.png" alt="!" width="40" height="40" /> </span>
            </div>
            <div className="w-full flex items-center justify-center">
                <div>
                    Get your API key simply, by just
                    <Link href="/user/signup">
                        <a className="underline pl-2 text-red-600 font-bold">
                            SignUp
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AlertGetApiKey
