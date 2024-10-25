import { onAuthStateChanged } from "firebase/auth"
import React, { useContext,useState,useEffect } from "react"
import { auth } from "../../firebase"
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(null)
    const [isUserLoggedIn,setIsUserLoggedIn]= useState(false)
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe;
    },[])

    async function initializeUser(user){
        if(user){
            setCurrentUser({...user})
            setIsUserLoggedIn(true)
        }else{
            setCurrentUser(null)
            setIsUserLoggedIn(false)
        }
        setLoading(false)
    }
    const value = {
        currentUser,
        isUserLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}