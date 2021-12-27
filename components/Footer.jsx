import Link from "next/link";

const Footer = () => {
    return (
        <section className="py-3 text-center bg-indigo-500 text-white">
            <h3 className="text-lg">Made with ☕ and 💻 by&nbsp;
                <Link href="/">
                    <a className="underline p-1">
                        Parshuram Nikam
                    </a>
                </Link>
            </h3>
        </section>
    )
}

export default Footer
