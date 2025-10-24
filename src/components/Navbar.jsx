import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import logo2 from '../assets/logo1.png'
import toast from 'react-hot-toast';
import { PuffLoader } from 'react-spinners';
const Navbar = () => {
    const { user,  signoutUserFunc, loading } = use(AuthContext);
    const handleLogOut = () => {
        console.log("user trying to LogOut");
        signoutUserFunc()
            .then(() => {
                toast.success("You Logged Out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
    </>
    return (
        <div className='bg-[#E5EEFF]'>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={logo2} alt="" className='md:h-[40px] md:w-[40px] h-[20px] w-[20px] rounded-[50%] animate__animated animate__bounce' />
                        <Link to='/home' className="md:text-xl fredoka font-bold text-blue-400">PawfectCare</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {loading?<PuffLoader />:user ? (
                        <div className="login-btn flex gap-2 md:gap-5">
                            <div className="tooltip tooltip-bottom ">
                                <div className="tooltip-content bg-blue-100">
                                    <div className=" text-blue-950 text-lg">{user.displayName}</div>
                                </div>
                                <div>
                                    <img
                                        className="w-12 h-12 rounded-[50%]"
                                        src={`${user && user.photoURL}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn md:px-5  hover:bg-blue-200  bg-blue-100 text-blue-500 ">
                                LogOut
                            </button>
                        </div>

                    ) : (
                        <>
                            <button className="btn btn-xs md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-500 ">
                                <Link to='/auth/login'>Login</Link>
                            </button>
                            <button className="btn btn-xs md:btn-md md:px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-500 ">
                                <Link to='/auth/signup'>SignUp</Link>
                            </button>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;