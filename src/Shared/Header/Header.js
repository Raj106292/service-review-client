import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/logo.jpg'
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                alert('Sign Out Successfully')
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const menuItem = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myReview'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/'>Add Services</Link></li>
                    <li className='font-semibold'><button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button></li>
                </> :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl flex items-center gap-2">
                    <img src={img} style={{ height: '40px', width: '40px' }} alt="" />
                    <p>RD's Photography</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn">Blog</Link>
            </div>
        </div>
    );
};

export default Header;