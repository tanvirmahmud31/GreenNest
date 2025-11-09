import React, { useContext } from "react";
import { Link } from "react-router";
import logo from "../../assets/green-nest-logo.avif";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((err) => console.log(err));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/plants">Plants</NavLink></li>
      <li><NavLink to="/profile">My Profile</NavLink></li>
    </>
  );

  return (
    <nav className="bg-base-200">
      <div className="navbar w-11/12 mx-auto rounded-2xl p-3">

       
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-2xl font-bold">
            <img className="w-10 rounded-2xl" src={logo} alt="" /> GreenNest
          </Link>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {links}

              {user ? (
                <>
                  <div className="flex items-center gap-3 p-2">
                    <img src={user.photoURL}  className="w-10 h-10 rounded-full" />
                    <span className="font-semibold text-start text-sm">{user.displayName}</span>
                  </div>
                  <button className="btn btn-sm btn-accent w-full" onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <li><NavLink className="btn mt-2 w-full" to="/auth/login">Login</NavLink></li>
                  <li><NavLink className="btn mt-2 w-full" to="/auth/register">Register</NavLink></li>
                </>
              )}
            </ul>
          </div>
        </div>

      
        <div className="navbar-end hidden lg:flex gap-4">
          <ul className="menu menu-horizontal px-1">{links}</ul>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow rounded-box w-52 mt-4 p-2">
                <li className="p-2 font-semibold ">{user.displayName}</li>
                <li><button className="btn btn-accent" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink className="btn" to="/auth/login">Login</NavLink>
              <NavLink className="btn" to="/auth/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
