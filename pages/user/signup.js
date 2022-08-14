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
    const [showAlert, setShowAlert] = useState(false);

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
            await fetch("https://fakestores.herokuapp.com/api/auth/signup",
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
                        setShowAlert(true);
                        setShowSpinner('hidden')
                        console.log(disableSignup);
                        console.log("notify email otp");
                        notifysuccess('Verification link has been sent to your Email!');
                    } else {
                        setShowAlert(false);
                        notifyWarning(result.message);
                        setDisableSignup(false);
                        setTimeout(() => {
                            setShowSpinner('hidden');
                        }, 500);
                    }
                }).catch((err) => {
                    // alert(err.message);
                    setDisableSignup(false);
                    console.log("Your refresh token may be get expired make new one 'OR' " + err);
                })
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

                        {/* <div className="mx-2 text-center border" style={{ color: "#721c24", backgroundColor: "#f8d7da", borderColor: "#f5c6cb" }}>
                            Email sent to you for verification!
                        </div> */}

                        {
                            showAlert && <div className="flex items-center rounded bg-indigo-400 text-white text-sm font-bold px-4 py-3" role="alert">
                                <svg className="fill-current text-indigo-900 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                <p>Email sent to you for verification!</p>
                            </div>
                        }

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
