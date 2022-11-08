import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/login_logo.jpg';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { setAuthToken } from '../../Utilities/Auth/auth';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createNewUser, updateUserProfile } = useContext(AuthContext);

    const handSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setAuthToken(user);
                updateUserProfile(name)
                    .then(() => {
                        form.reset();
                        alert('Sign Up Successful')
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={logo} alt="" className='w-4/5' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p>Or Sign-up with</p>
                            <div className='flex justify-center text-2xl gap-5 my-4'>
                                <SiFacebook></SiFacebook>
                                <FaLinkedin></FaLinkedin>
                            </div>
                            <div>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                        <div className='text-center'>
                            Already have an account? <Link to='/login' className='font-semibold text-orange-600'>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;