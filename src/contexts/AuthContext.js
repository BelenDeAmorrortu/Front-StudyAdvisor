import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    const auth = getAuth()

    function signUp(email, password, username){

        createUserWithEmailAndPassword( auth, email, password)
    
        auth.onAuthStateChanged(user =>{

            if(user){
    
                user.updateProfile({
                    displayName: username
                })

            }
        })
    }

    useEffect(()=>{

        const unsubscribe = auth.onAuthStateChanged( user => setCurrentUser(user))
    
        return unsubscribe

    }, [])

    useEffect(()=>{

        console.log(currentUser)

    }, [currentUser])

    
    let value={
        currentUser,
        signUp
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
