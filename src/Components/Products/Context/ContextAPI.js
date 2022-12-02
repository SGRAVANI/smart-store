import {createContext, useContext, useEffect, useState} from "react"
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
GoogleAuthProvider,
signInWithPopup,
} from "firebase/auth";
import { auth } from "../../login/Firebase";
// import * as firebase from 'firebase/app'

let UserAuthContext=createContext();


//createUserWithEmailAndPassword () to create user
export function UserAuthContextProvider({children}){
    const[user,setUser]=useState({});
    const[signupstatus,setSignUp]=useState(false);
    function SignUp(email,password){
        setSignUp(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function LogIn(email,password){
        if(signupstatus)
        {
            setSignUp(false);
        }
        return signInWithEmailAndPassword(auth,email,password);
    }
    function LogOut()
    {
        return signOut(auth)
    }
    function SignInWithGoogle()
    {
     const Provider=new GoogleAuthProvider()
       // console.log(GoogleAuthProvider.name())
        return signInWithPopup(auth,Provider)
    }
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log("autho:",currentUser)
     setUser(currentUser);
    });
     //console.log(user);
     return ()=>{
        unsubscribe();
     };
     
    },[])
    return (
        <UserAuthContext.Provider value={{user,SignUp,LogIn,LogOut,SignInWithGoogle,signupstatus}}>
            {children}
        </UserAuthContext.Provider>
    )
}
export function useUserAuth()
{
    return useContext(UserAuthContext);
}