import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');

    const handleUpdate = () => {
        if (!user) return;

        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                alert('Profile updated successfully!');
            })
            .catch(err => {
                console.error(err);
                alert('Update failed: ' + err.message);
            });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <main className=" container mx-auto mt-6 p-6">
                <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl mx-auto ">
                    <h2 className="text-3xl font-bold mb-2">My Profile</h2>
                    <p className="text-gray-500 mb-6">View and manage your account details</p>

                    <div className='flex justify-between items-center shadow-amber-100'>
                        <div className='flex gap-3 items-center'>
                            <div >
                                <img
                        src={photo || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="rounded-full w-28 h-28 object-cover mx-auto mb-4 border-2 border-green-500"
                    />
                               
                            </div>

                            <div className="mb-4">

                                <p className="text-gray-500 font-bold text-2xl">{user?.displayName}</p>
                                <p className="text-gray-500">{user?.email}</p>
                            </div>
                        </div>



                        <button
                            onClick={handleUpdate}
                            className="btn bg-green-600 text-center text-white p-4"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </main>

            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;
