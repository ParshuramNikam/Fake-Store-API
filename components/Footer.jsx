import Link from "next/link";

const Footer = () => {
    return (
        <>
            <section className="py-3 text-center bg-indigo-500 text-white">
                <h3 className="text-lg">Made with ☕ and 💻 by&nbsp;
                    <Link href="/">
                        <a className="underline p-1">
                            Parshuram Nikam
                        </a>
                    </Link>
                </h3>
            </section>
            <div className="text-center">
                <p className="text-sm  p-1">
                    Images / Icons Credits :&emsp;
                    <cite>
                        <Link href="https://storyset.com/" >
                            <a target="_blank">
                                <span className="text-indigo-500 not-italic">StorySet</span>
                            </a>
                        </Link>
                    </cite>
                    &emsp;
                    <cite>
                        <Link href="https://www.flaticon.com/">
                            <a target="_blank">
                                <span className="text-indigo-500 not-italic">Flaticons</span>
                            </a>
                        </Link>
                    </cite>
                    &emsp;
                    <cite>
                        <Link href="https://www.iconfinder.com/">
                            <a target="_blank">
                                <span className="text-indigo-500 not-italic">IconFinder</span>
                            </a>
                        </Link>
                    </cite>
                </p>
            </div>
        </>
    )
}

export default Footer
