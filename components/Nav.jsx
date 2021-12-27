import { Transition } from "@headlessui/react";
import Link from 'next/link'
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Router from 'next/router'
import { toast } from 'react-toastify';
import MyToastContainer from './MyToastContainer.jsx';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [disable, setDisable] = useState(false);
    // const [currentPage, setCurrentPage] = useState('');

    const notify = () => toast.success('Logout Succesful!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const notifyWarning = (warning) => toast.warn(warning, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        if (Cookies.get('access_token')) {
            console.log(isLoggedIn);
            setIsLoggedIn(true);
        }
    },[])

    const logoutHandler = async () => {
        setDisable(true);
        await fetch('http://localhost:8000/api/auth/logout',
            {
                method: "DELETE",
                credentials: "include", // added this part
            }).then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.status === 'success') {
                    notify();
                    Cookies.remove('access_token');
                    console.log(Router.pathname);
                    setTimeout(() => {
                        setDisable(false);
                        if (Router.pathname === '/user/login') Router.push('/')
                        else Router.push('/user/login')
                    }, 1100);
                } else {
                    setDisable(false);
                    notifyWarning(result.message);
                }
            }).catch((err) => {
                console.log(err);
                setDisable(false);
            })
    }

    return (
        <div>
            <MyToastContainer />
            <nav className="bg-indigo-500">
                <div className="max-w-6xl 6xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  container">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-shrink-0">
                                <a className="flex flex-nowrap title-font font-medium items-center text-white lg:justify-center">
                                    <img src="/logo.png" alt="" className="w-10 h-10" />
                                    <span className="ml-3 text-xl text-white whitespace-nowrap">FakeStore API</span>
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/">
                                        <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                            <a className="">
                                                Home
                                            </a>
                                        </div>
                                    </Link>

                                    <Link href="/docs">
                                        <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                            <a className="">
                                                Docs
                                            </a>
                                        </div>
                                    </Link>

                                    <Link href="https://github.com/ParshuramNikam">
                                        <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                            <a className="">
                                                Github
                                            </a>
                                        </div>
                                    </Link>

                                    {
                                        isLoggedIn
                                            ? <>
                                                <Link href="/dashboard">
                                                    <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                        <a className="">
                                                            Dashboard
                                                        </a>
                                                    </div>
                                                </Link>
                                                <button className={`w-full cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium ${disable ? "cursor-not-allowed" : ""}`}
                                                    onClick={() => logoutHandler()}
                                                    disabled={disable ? true : false}
                                                >
                                                    Logout
                                                </button>
                                            </>
                                            : <div className="hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                <Link href="/user/login">
                                                    <a className="">
                                                        Login
                                                    </a>
                                                </Link>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" transform transition duration-500 ease-in-out bg-indigo-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {isOpen &&
                        <div className="md:hidden transform transition duration-500 ease-in-out " id="mobile-menu">
                            <div className="text-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/">
                                    <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                        <a className="">
                                            Home
                                        </a>
                                    </div>
                                </Link>

                                <Link href="/docs">
                                    <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                        <a className="">
                                            Docs
                                        </a>
                                    </div>
                                </Link>

                                <Link href="https://github.com/ParshuramNikam">
                                    <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                        <a className="">
                                            Github
                                        </a>
                                    </div>
                                </Link>

                                {/* ===================================== */}

                                {
                                    isLoggedIn
                                        ? <>
                                            <Link href="/dashboard">
                                                <div className="cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                                    <a className="">
                                                        Dashboard
                                                    </a>
                                                </div>
                                            </Link>
                                            <button className="w-full cursor-pointer hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                                                onClick={() => logoutHandler()}
                                            >
                                                Logout
                                            </button>
                                        </>
                                        : <div className="hover:bg-indigo-400 text-white block px-3 py-2 rounded-md text-base font-medium">
                                            <Link href="/user/login">
                                                <a className="">
                                                    Login
                                                </a>
                                            </Link>
                                        </div>


                                }

                            </div>
                        </div>
                    }
                </Transition>
            </nav>


            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main > */}

        </div >
    );
}

export default Nav;