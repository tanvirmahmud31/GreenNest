import React, { useState } from "react";
import logo from "../assets/green-nest-logo.avif";
import { Link, useLocation, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("✅ Login Successful!");

                const from = location.state?.from?.pathname || "/";

                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500);
            })
            .catch((err) => {
                toast.error(err.code);
                setError(err.code);
            });

    };

    return (
        <div className="flex justify-center items-center p-7 bg-[#f8f6f2] py-6">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-xl">
                <form onSubmit={handleLogin} className="card-body px-8 space-y-4">
                    <div className="flex flex-col items-center mb-4">
                        <img className="w-16 h-16 mb-3" src={logo} alt="Green Nest Logo" />
                        <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
                        <p className="text-center text-gray-500 text-sm">
                            Login to manage your GreenNest
                        </p>
                    </div>

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

                    {error && <p className="text-red-700">{error}</p>}

                    <button
                        type="submit"
                        className="btn bg-[#3a5b43] hover:bg-[#2f4b37] text-white w-full"
                    >
                        Login
                    </button>

                    <div className="divider text-sm text-gray-500">or</div>

                    <button className="btn bg-white border border-gray-200 hover:bg-gray-100 text-black w-full flex items-center justify-center gap-2">
                        Google Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="text-[#3a5b43] font-bold  hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

           
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Login;
