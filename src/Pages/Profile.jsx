import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');

    // form open/close state
    const [editMode, setEditMode] = useState(false);

    const handleUpdate = () => {
        if (!user) return;

        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            alert('Profile updated successfully!');
            setEditMode(false);
        })
        .catch(err => {
            console.error(err);
            alert('Update failed: ' + err.message);
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <main className="container mx-auto mt-8 p-4 ">
                <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">My Profile</h2>
                    <p className="text-gray-500 mb-6">Manage your account info</p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                        <img
                            src={photo || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="rounded-full w-28 h-28 object-cover border-2 border-green-600"
                        />

                        <div>
                            <p className="text-xl font-bold text-gray-700">{user?.displayName}</p>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    {/* Edit button */}
                    <div className="mt-6 flex justify-center sm:justify-end">
                        <button
                            onClick={() => setEditMode(true)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
                        >
                            Update Profile
                        </button>
                    </div>

                    {/* Update Form Modal */}
                    {editMode && (
                        <div className="mt-6 p-4 bg-gray-50 border rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-3">Edit Profile</h3>

                            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                className="w-full border p-2 rounded mb-3 outline-none focus:ring focus:ring-green-300"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label className="block font-medium text-gray-700 mb-1">Photo URL</label>
                            <input
                                className="w-full border p-2 rounded mb-4 outline-none focus:ring focus:ring-green-300"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />

                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={() => setEditMode(false)}
                                    className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-200"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleUpdate}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;
