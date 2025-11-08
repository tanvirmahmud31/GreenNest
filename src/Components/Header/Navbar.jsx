import React from 'react';
import { Link } from 'react-router';  // ✅ Fixed import
import logo from '../../assets/green-nest-logo.avif'
const Navbar = () => {

    const links =
        <>
            <li className=' text-l' ><Link to="/">Home</Link></li>
            <li className=' text-l'><Link to="/plants">Plants</Link></li>
            <li className=' text-l'><Link to="/profile">My Profile</Link></li>
        </>

    return (
        <nav className='bg-base-200'>
            <div className="navbar w-11/12 mx-auto   rounded-2xl p-3">
                
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-2xl font-bold "><img className='w-10 rounded-2xl' src={logo} alt="" /> GreenNest</Link>
                </div>

                {/* Mobile Menu */}
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {links}
                            <li className=' text-l'><Link className="btn mt-2 w-full" to="/login">Login</Link></li>
                            <li className=' text-l'><Link className="btn mt-2 w-full" to="/register">Register</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex gap-4">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                    <Link className="btn text-l" to="/login">Login</Link>
                    <Link className="btn text-l" to="/register">Register</Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
