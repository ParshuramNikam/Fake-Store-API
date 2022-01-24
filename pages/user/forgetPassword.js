import PageHead from "../../components/PageHead";
import React, { useState } from 'react'
import Link from 'next/link';
import MyToastContainer from '../../components/MyToastContainer';
import { toast } from 'react-toastify';
// import { Dialog, Transition } from '@headlessui/react';

const forgetPassord = () => {
    const [email, setEmail] = useState("");
    const [disable, setDisable] = useState(false);

    const notifysuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 3000,
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

    const sendRequest = () => {
        if(disable) return notifysuccess('Email already sent to you!')
        setDisable(true);
        if (email === "") {
            setDisable(false);
            return notifyWarning("Please provide your Email address!");
        }
        // setDisable('HHHHHH')
        console.log(email.trim().toLowerCase());
        fetch(`https://fakestores-api.herokuapp.com/api/auth/forget-password?email=${email.trim().toLowerCase()}`, {
            credentials: 'include',
            method: "GET", // added this part
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json())
        .then((result) => {
                if (result.status === 'success') {
                    console.log('success');
                    notifysuccess(result.message)
                }else{
                    console.log('failed');
                    setDisable(false);
                    return notifyWarning(result.message);
                }
            }).catch((err)=> {
                console.log(err);
                setDisable(false)
                notifyWarning(err)
            })

    }

    return (
        <>
        <PageHead title={'Forget Password | Fake Store API'}/>
        <section className='bg-blue-50 min-h-screen w-screen flex justify-center items-center p-2'>
            <MyToastContainer/>
            <div className="w-full md:max-w-lg bg-white p-5 rounded-lg">
                <div>
                    <div className="p-2 md:p-5 lg:px-8 mb-2 text-center">
                        <h3 className="pt-4 mb-3 text-2xl">Forgot Your Password?</h3>
                        <p className="mb-4 text-sm text-gray-700">
                            We get it, stuff happens. Just enter your email address below and we&apos;ll send you a
                            link to reset your password!
                        </p>
                    </div>
                    <form className="p-2 md:p-5 lg:px-8  pb-8 mb-4 bg-white rounded"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="mb-6">
                            <label className="block mb-0 text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
                                    required value={email} type="email" placeholder="user@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                className={`w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline`}
                                type="button"
                                // disabled={disable ? true : false}
                                onClick={(e) => { e.preventDefault(); sendRequest() }}
                            >
                                Reset Password
                            </button>
                        </div>
                        {/* <hr className=" border-t" /> */}
                        <div className="mt-10 text-center">
                            <Link href="/user/signup">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    Create an Account!
                                </a>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href="/user/login">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    Already have an account? Login!
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default forgetPassord
