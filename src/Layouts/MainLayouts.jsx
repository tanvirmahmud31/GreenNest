import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import BannerSlider from '../Components/Swiper/BannerSlider';
import CareTips from '../Components/CareTips/CareTips';
import Experts from '../Components/Experts/Experts';

const MainLayouts = () => {
   // const {state}=useNavigate()
    return (
        <div className='bg-[#f6f8f6]'>
            <header>
                <Navbar></Navbar>
            </header>
            <section className='mt-5 space-y-3 bg-[#f6f8f6]'>
                <BannerSlider></BannerSlider>
            </section>

            <main className='bg-[#f6f8f6]'>
                <Outlet></Outlet>
            </main>
                <section className='w-11/12 mx-auto bg-white rounded-2xl mt-4 py-7'>
                    <CareTips ></CareTips>
                </section>
                <section className='w-11/12 mx-auto'>
                    <Experts></Experts>
                </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;