import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const AuthLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f6f8f6]">
            <header>
                <Navbar />
            </header>

            <main className='flex-1 w-11/12 mx-auto text-center bg-[#f8f6f2] p-5 rounded-4xl'>
                <Outlet />
            </main>

            <footer className=''>
                <Footer />
            </footer>
        </div>
    );
};

export default AuthLayouts;
