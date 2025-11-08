import React from 'react';
import logo from '../assets/green-nest-logo.avif'
import { Link, useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

    const location= useLocation();
    const navigate =useNavigate();

    const {signIn}=use(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(`${location.state ? location.state :'/'} `)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="flex justify-center items-center p-7 bg-[#f8f6f2] py-6">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-xl">
                <form onSubmit={handleLogin} className="card-body px-8 space-y-4">

                    {/* Logo & Heading */}
                    <div className="flex flex-col items-center mb-4">
                        <img className="w-16 h-16 mb-3" src={logo} alt="Green Nest Logo" />
                        <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
                        <p className="text-center text-gray-500 text-sm">
                            Login to manage your GreenNest
                        </p>
                    </div>

                    {/* Form Fields */}
                    <fieldset className="fieldset space-y-3 text-start">

                        <div>
                            <label className="label font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>


                        <div>
                            <label className="label font-medium mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Enter your password"
                                required
                            />

                        </div>
                    </fieldset>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a className="link link-hover text-sm text-gray-600">Forgot password?</a>
                    </div>

                    <button type='submit' className="btn bg-[#3a5b43] hover:bg-[#2f4b37] text-white w-full">
                        Login
                    </button>

                    {/* Divider */}
                    <div className="divider text-sm text-gray-500">or</div>

                    {/* Google Login */}
                    <button className="btn bg-white border border-gray-200 hover:bg-gray-100 text-black w-full flex items-center justify-center gap-2">
                        <svg
                            aria-label="Google logo"
                            width="18"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="M0 0h512v512H0z" fill="#fff" />
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            </g>
                        </svg>
                        Sign in with Google
                    </button>

                    {/* Redirect to Login */}
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-[#3a5b43] font-bold  hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;