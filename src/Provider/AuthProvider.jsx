import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

// ✅ Correct Context creation
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)

    // ✅ Firebase Register Function
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login 

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged( auth,(currentUser)=>{
            setUser(currentUser);
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
    };

    // ✅ Correct Provider return
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
