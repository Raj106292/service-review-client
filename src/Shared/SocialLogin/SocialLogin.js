import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Utilities/Auth/auth';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleLogIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthToken(user);
                
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div>
            <p className='text-center'>
                <button onClick={handleGoogleLogIn} className='btn btn-ghost'><FaGoogle></FaGoogle></button>
            </p>
        </div>
    );
};

export default SocialLogin;