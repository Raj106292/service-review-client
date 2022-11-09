import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/login_logo.jpg';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import { setAuthToken } from '../../Utilities/Auth/auth';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { userLogIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                // get JWT token
                setAuthToken(user);

                navigate(from, { replace: true })
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" className='w-4/5' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>or Sign-in with</p>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                    <div className='text-center'>
                        New to Genius Car? <Link to='/signup' className='font-semibold text-orange-600'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;