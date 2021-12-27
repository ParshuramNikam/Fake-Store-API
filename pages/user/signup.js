import PageHead from "../../components/PageHead";
import { useState } from 'react';
import Link from 'next/link'
import MyToastContainer from '../../components/MyToastContainer';
import { toast } from 'react-toastify';

const register = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "", otp: "" });
    const [showSpinner, setShowSpinner] = useState('hidden');
    const [passwordToggle, setPasswordToggle] = useState(true)
    const [disableSignup, setDisableSignup] = useState(false);

    const notifysuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 2500,
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


    const signupHandler = async () => {
        if (loginDetails.email.length > 0 && loginDetails.password.length > 0) {
            let reqBody;
            if (loginDetails.token === "") reqBody = { email: loginDetails.email, password: loginDetails.password };
            else reqBody = loginDetails;

            setShowSpinner('inline');
            setDisableSignup(true);
            await fetch("http://localhost:8000/api/auth/signup",
                {
                    method: "POST",
                    body: JSON.stringify(reqBody),
                    credentials: "include", // added this part to send cookies in browser
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((res) => res.json())
                .then(result => {
                    console.log(result);
                    if (result.status === 'success') {
                        setShowSpinner('hidden')
                        console.log(disableSignup);
                        console.log("notify email otp");

                        notifysuccess('Verification link has been sent to your Email!');
                    } else {
                        notifyWarning(result.message);
                        setDisableSignup(false);
                        setTimeout(() => {
                            setShowSpinner('hidden');
                        }, 500);
                    }
                });
        } else {
            setDisableSignup(false);
            notifyWarning('All fields Required!')
        }
    }

    return (
        <>
            <PageHead title={'SignUp | Fake Store API'} />
            {/* <MyToastContainer /> */}
            <div className="antialiased bg-indigo-50 py-3">
                {/* <Nav /> */}
                <div className="flex items-center h-screen w-full  font-sans ">
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-lg md:mx-auto">
                        <span className="block w-full uppercase font-bold mb-4 text-indigo-600 text-2xl">Sign Up</span>
                        <form className="my-8">
                            <div className="mb-6 md:w-full">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Email Address
                                </div>
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${disableSignup ? "cursor-not-allowed" : ""}`} type="email" placeholder="user@gmail.com"
                                    disabled={disableSignup ? true : false}
                                    onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-6 md:w-full">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${disableSignup ? "cursor-not-allowed" : ""}`} type={passwordToggle ? 'password' : ''} placeholder="Enter your password"
                                    disabled={disableSignup ? true : false}
                                    onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                                />
                                <div className='float-right mt-1.5 flex items-center'>
                                    <input onChange={() => setPasswordToggle(!passwordToggle)} type="checkbox" name="passswordToggle" id="passswordToggle" className='px-1 mr-2 cursor-pointer h-4 w-4'
                                        disabled={disableSignup ? true : false}
                                    />
                                    <label htmlFor="passswordToggle">Show Password</label>
                                </div>
                            </div>
                            {
                                <button className={`mb-5 flex items-center bg-blue-500 realtive hover:bg-blue-600 focus:ring text-white uppercase text-sm font-semibold px-4 py-2 rounded ${disableSignup ? "cursor-not-allowed" : ""}`}
                                    onClick={(e) => { e.preventDefault(); signupHandler() }}
                                    disabled={disableSignup ? true : false}
                                >Sign Up
                                    <span className={`ml-3 relative top-0.5 ${showSpinner}`}>
                                        <div className="icon-container">
                                            <i className="loader"></i>
                                        </div>
                                    </span>
                                </button>
                            }
                        </form>

                        <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                            Already have an account ?
                            <Link href="/user/login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                                <a className='ml-1 text-indigo-600'>Log In</a>
                            </Link>
                        </div>
                        <MyToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default register
