import Link from "next/link"
import SideBarMenuItems from "../src/Data/SideBarMenuItems"

const SideBar = () => {
    return (
        <nav className="bg-gray-600 overflow-y-auto h-screen sticky top-0 hidden lg:block text-white lg:px-5 md:px-3 py-3 w-1/5">
            <ul className="mt-10">
                <li>
                    <h3 className="text-xl mt-3 mb-6 lg:text-2xl">
                        <Link href="#products"><a>Products</a></Link>
                    </h3>
                </li>
                {
                    SideBarMenuItems.productsMenu.map((item, index) => {
                        return (
                            <li key={index} className="mb-2">
                                <Link href={item.href}><a>{item.title}</a></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className=" w-full bg-gray-300 mt-5" />
            
            <ul className="mt-10">
                <li>
                    <h3 className="text-xl mt-3 mb-6 lg:text-2xl">
                        <Link href="#products"><a>Cart</a></Link>
                    </h3>
                </li>
                {
                    SideBarMenuItems.cartMenu.map((cart, index) => {
                        return (
                            <li key={index} className="mb-2">
                                <Link href={cart.href}><a>{cart.title}</a></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className=" w-full bg-gray-300 mt-5" />

            <ul className="mt-10">
                <li>
                    <h3 className="text-xl mt-3 mb-6 lg:text-2xl">
                        <Link href="#users"><a>Users</a></Link>
                    </h3>
                </li>
                {
                    SideBarMenuItems.userMenu.map((user, index) => {
                        return (
                            <li key={index} className="mb-2">
                                <Link href={user.href}><a>{user.title}</a></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr className=" w-full bg-gray-300 my-5" />

        </nav>
    )
}

export default SideBar
