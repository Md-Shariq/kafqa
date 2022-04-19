import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from './../assets/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const notify = (message, type) => {
        if (type === 'success') toast.success(message);
        else if (type === 'error') toast.error(message);
        else toast.warn(message);
    };

    const navigate = useNavigate();


    const data = {
        name: "rohit",
        emailId: "rroo@gmail.com",
        password: "1234567890",
        phoneNo: "9876543210"
    }

    function Login() {
        if (email != '' || password != '') {
            if (email !== data.emailId || password !== data.password) {
                notify('You have entered wrong email or password', 'error')
            }
            else {
                notify('YOU ARE VALID USER', 'success');
                setTimeout(()=>{
                    navigate("/home");
                },2000)
            }
        } else {
            notify('Both field are required', 'warning')
        }

    }

    return (
        <section class="register-page">
            <ToastContainer />
            <div class="row gx-0 h-100">
                <div class="col-md-6 h-100">
                    <div class="login-left-box">
                        <img src={loginImg} alt="" class="login-img" />
                    </div>
                </div>
                <div class="col-md-6 h-100">
                    <div class="login-right-box">
                        <div class="col-md-7 mt-5">
                            <p class="register">Login</p>
                            <p class="fs-13 gray mb-3">Before moving further, we need some information to make your trip
                                memorizing</p>
                            <div class="mt-3">
                                <p class="name-color fs-16 fw-500 m-0 mb-2">Email Address</p>
                                <input type="text" class="register-input" value={email} onChange={(event) => setemail(event.target.value)} />
                            </div>
                            <div class="mt-3">
                                <p class="name-color fs-16 fw-500 m-0 mb-2">Password</p>
                                <input type="text" class="register-input" value={password} onChange={(event) => setpassword(event.target.value)} />
                                {/* { !checkValidation && <small className='text-danger'>You have entered wrong email or password</small>} */}
                            </div>


                            <button class="btn btn-primary signup-btn" onClick={Login}>Sign in</button>
                            <div>
                                <p class="text-center mt-4  fw-500 fs-13">Or don't have any KAFQA account?<span><a href="" class="fs-14">Make New One</a></span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
