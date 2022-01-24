import PageHead from "../../../../components/PageHead";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import MyToastContainer from '../../../../components/MyToastContainer';
import { toast } from 'react-toastify';
// import Router  from 'next/router';
import { useRouter } from "next/router";
// import { Dialog, Transition } from '@headlessui/react';

const changePassword = () => {
    const router = useRouter()
    const [userIdOtp, setUserIdOtp] = useState(router.query);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [newPasswordToggle, setNewPasswordToggle] = useState(true);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(true);

    const notifysuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 1400,
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

    useEffect(() => {
        console.log(router.query);
        setUserIdOtp(router.query);
    }, [router])

    const sendRequest = () => {
        if (disable) {
            console.log(disable);
            notifysuccess('Password reset sucessfully!');
            return 
        }

        if (newPassword === "" || confirmPassword === "") {
            setDisable(false);
            return notifyWarning("Please fill all fileds!");
        }
        if (newPassword !== confirmPassword) {
            setDisable(false);
            return notifyWarning('Passwords not match! check your password.')
        }

        // console.log(newPassword.trim().toLowerCase());
        fetch(`https://fakestores-api.herokuapp.com/api/auth/changePassword/${userIdOtp.userId}/${userIdOtp.otp}`, {
            credentials: 'include',
            method: "POST", // added this part
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: newPassword,
                cpassword: confirmPassword,
            }),
        }).then((res) => res.json())
            .then((result) => {
                console.log(">>",result.status);
                if (result.status === 'success') {
                    setDisable(true)
                    console.log('success');
                    notifysuccess(result.message)
                    setTimeout(() => {
                        router.push('/user/login')
                    }, 1500);
                    // return
                } else {
                    console.log('failed');
                    setDisable(false);
                    return notifyWarning(result.message);
                }
            }).catch((err) => {
                console.log(err);
                setDisable(false)
                notifyWarning(err)
            })

    }

    return (
        <>
        <PageHead title={'Change Password | Fake Store API'}/>
        <section className='bg-blue-50 min-h-screen w-screen flex justify-center items-center p-2'>
            <MyToastContainer />
            <div className="w-full md:max-w-lg bg-white p-3 rounded-lg">
                <div>
                    <div className="p-2 md:p-5 lg:px-8 text-center">
                        <h3 className="pt-4 mb-3 text-2xl">Create new password</h3>
                        <p className="mb-4 text-sm text-gray-700">
                            Your new password must be different from previous used password.
                        </p>
                    </div>
                    <form className="p-2 md:p-4 lg:px-6  pb-8 mb-4 bg-white rounded"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="mb-10">
                            <label className="block mb-0 text-sm font-bold text-gray-700" htmlFor="newPassword">
                                Password
                            </label>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
                                    required value={newPassword} name="newPassword" id="newPassword" placeholder="Enter new passoword"
                                    autoComplete='true' type={newPasswordToggle ? 'password' : ''}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className='float-right mt-1.5 flex items-center'>
                                <input onChange={() => setNewPasswordToggle(!newPasswordToggle)} type="checkbox" name="passswordToggle" id="passswordToggle" className='px-1 mr-2 cursor-pointer h-4 w-4'
                                    disabled={disable ? true : false}
                                />
                                <label htmlFor="passswordToggle">Show Password</label>
                            </div>
                        </div>
                        {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
                        <div className="mb-10">
                            <label className="block mb-0 text-sm font-bold text-gray-700" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                <input className={`px-1 w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
                                    required value={confirmPassword} name="confirm-password" id="confirm-password" placeholder="Confirm your passoword"
                                    autoComplete='true' type={confirmPasswordToggle ? 'password' : ''}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className='float-right mt-1.5 flex items-center'>
                                <input onChange={() => setConfirmPasswordToggle(!confirmPasswordToggle)} type="checkbox" name="c-passwordToggle" id="c-passwordToggle" className='px-1 mr-2 cursor-pointer h-4 w-4'
                                    disabled={disable ? true : false}
                                />
                                <label htmlFor="c-passwordToggle">Show Password</label>
                            </div>
                        </div>
                        {/* - - - - - - - - - - - - - - - - - - - - -- - - - -  - -- - - - -  - */}
                        <div className="text-center">
                            <button
                                className={`mt-5 mb-6 w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline`}
                                type="button"
                                disabled={disable ? true : false}
                                onClick={(e) => { e.preventDefault(); sendRequest() }}
                            >
                                Reset Password
                            </button>
                        </div>
                        {/* <hr className=" border-t" /> */}
                        <div className="mt-4 text-center">
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

export default changePassword
