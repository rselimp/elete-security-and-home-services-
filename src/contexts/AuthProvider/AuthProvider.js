import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'




export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const[user, sertUser] = useState(null)
    const[loading, setLoading] = useState(true)
  
  

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =() =>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( () =>{
     const unsubscribe=  onAuthStateChanged(auth,currentUser =>{
            //console.log(currentUser);
            sertUser(currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe;
        }
    },[])
    

  const authInfo ={
    user,
    loading,
    createUser,
    login,
    logOut,
    auth,
    signInWithGoogle
  

  }   
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;