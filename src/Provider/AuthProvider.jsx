import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);

// ✅ Correct Context creation
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]= useState(true)
    console.log(user)

    // ✅ Firebase Register Function
    const createUser = (email, password,name,photo) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password,name,photo)
        .then((result) => {
            // Update profile
            return updateProfile(result.user, { displayName: name, photoURL: photo })
                .then(() => result.user); // Return the updated user
        });
    };

    // login 

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged( auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
    };

    // ✅ Correct Provider return
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
