import PageHead from "../../components/PageHead";
import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import MyToastContainer from '../../components/MyToastContainer';
import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';

const login = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [showSpinner, setShowSpinner] = useState('hidden');
    const [passwordToggle, setPasswordToggle] = useState(true);
    const [disableLogin, setDisableLogin] = useState(false);

    const notifysuccess = () => toast.success('Logged In, succesful!', {
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
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const loginHandler = async () => {
        if (loginDetails.email.length > 0 && loginDetails.password.length > 0) {
            setShowSpinner('inline');
            setDisableLogin(true);
            await fetch("/api/auth/login",
                {
                    method: "POST",
                    body: JSON.stringify(loginDetails),
                    credentials: "include", // added this part
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((res) => res.json())
                .then(result => {
                    console.log(result);
                    if (result.status === 'success') {
                        // Cookies.set('access_token',)
                        notifysuccess();
                        setDisableLogin(true);
                        setTimeout(() => {
                            console.log("push to /dashboard");
                            Router.push('/dashboard');
                        }, 1200);
                    } else {
                        setDisableLogin(false)
                        setShowSpinner('hidden');
                        notifyWarning(result.message);
                    }
                }).catch((err) => {
                    // alert(err.message);
                    console.log("Your refresh token may be get expired make new one 'OR' " + err);
                })
        } else {
            setDisableLogin(false);
            notifyWarning('All fields Required!');
        }
    }

    return (
        <>
            <PageHead title={'Login | Fake Store API'} />
            {/* <MyToastContainer /> */}
            <div className="antialiased bg-indigo-50 py-3">
                {/* <Nav /> */}
                <div className="flex items-center h-screen w-full font-sans ">
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-lg md:mx-auto">
                        <span className="block w-full uppercase font-bold mb-4 text-indigo-600 text-2xl">Login</span>
                        <form className="my-8">
                            <div className="mb-6 md:w-full">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Email Address
                                </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="user@gmail.com"

                                    onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-6 md:w-full">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <Link href="/user/forgetPassword">
                                            <a className="text-xs float-right font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                                Forgot Password?
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${disableLogin ? "cursor-not-allowed" : ""}`} type={passwordToggle ? 'password' : ''} placeholder="Enter your password"
                                    disabled={disableLogin ? true : false}
                                    onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                                />
                                <div className='float-right mt-1.5 flex items-center'>
                                    <input onChange={() => setPasswordToggle(!passwordToggle)} type="checkbox" name="passswordToggle" id="passswordToggle" className='px-1 mr-2 cursor-pointer h-4 w-4'
                                        disabled={disableLogin ? true : false}
                                    />
                                    <label htmlFor="passswordToggle">Show Password</label>
                                </div>
                            </div>


                            <button className={`bg-indigo-500 text-gray-100 py-3 px-5 flex items-center bg-blue-500 realtive hover:bg-blue-600 focus:ring text-white uppercase text-sm font-semibold px-4 py-2 rounded ${disableLogin ? "cursor-not-allowed" : ""}`}
                                onClick={(e) => { e.preventDefault(); loginHandler() }}
                                disabled={disableLogin ? true : false}
                            >Login
                                <span className={`ml-3 relative top-0.5 ${showSpinner}`}>
                                    <div className="icon-container">
                                        <i className="loader"></i>
                                    </div>
                                </span>
                            </button>

                        </form>

                        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                            Don&apos;t have an account ?
                            <Link href="/user/signup" className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                                <a className='ml-1 text-indigo-600'>Sign Up</a>
                            </Link>
                        </div>
                        <MyToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default login
