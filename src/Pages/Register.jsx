import React, { useContext, useState } from 'react';
import logo from '../assets/green-nest-logo.avif';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { setUser, createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegisterForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // ✅ Password validation: at least 6 chars, one uppercase, one lowercase
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters, include one uppercase and one lowercase letter");
            return;
        }

        createUser(email, password,name,photo)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("✅ Registration Successful!");
                navigate('/'); // redirect to home
            })
            .catch(err => {
                console.log("error", err);
                toast.error(err.message);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f8f6f2] py-6">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-xl">
                <form onSubmit={handleRegisterForm} className="card-body px-8 space-y-4">

                    {/* Logo & Heading */}
                    <div className="flex flex-col items-center mb-4">
                        <img className="w-16 h-16 mb-3" src={logo} alt="Green Nest Logo" />
                        <h1 className="text-2xl font-semibold mb-1">Create Your Account</h1>
                        <p className="text-center text-gray-500 text-sm">
                            Join our community and start your plant journey
                        </p>
                    </div>

                    {/* Fields */}
                    <fieldset className="fieldset space-y-3 text-start">

                        <div>
                            <label className="label font-medium mb-2">Full Name</label>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter your full name" required />
                        </div>

                        <div>
                            <label className="label font-medium mb-2">Email Address</label>
                            <input type="email" name="email" className="input input-bordered w-full" placeholder="Enter your email address" required />
                        </div>

                        <div>
                            <label className="label font-medium mb-2">Profile Photo URL (Optional)</label>
                            <input type="url" name="photo" className="input input-bordered w-full" placeholder="https://example.com/photo.jpg" />
                        </div>

                        <div>
                            <label className="label font-medium mb-2">Password</label>
                            <input type="password" name="password" className="input input-bordered w-full" placeholder="Enter your password" required />
                            <p className="text-xs text-gray-500 mt-1">At least 6 characters, one uppercase, one lowercase</p>
                        </div>

                    </fieldset>

                    {error && <p className="text-red-700">{error}</p>}

                    <button className="btn bg-[#3a5b43] hover:bg-[#2f4b37] text-white w-full">
                        Register
                    </button>

                    <div className="divider text-sm text-gray-500">or</div>

                    <button className="btn bg-white border border-gray-200 hover:bg-gray-100 text-black w-full flex gap-2 justify-center">
                        {/* Google Icon */}
                        Register with Google
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account? 
                        <Link to="/auth/login" className="text-[#3a5b43] font-bold hover:underline ml-1">Log In</Link>
                    </p>
                </form>

                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default Register;
