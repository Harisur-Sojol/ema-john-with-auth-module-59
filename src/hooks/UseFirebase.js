import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, Setuser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      return  signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            Setuser({})
        })
    }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {

            if(user){
                Setuser(user)
            }
        })
        return unsubscribe;
    }, [])

    return {user, signInUsingGoogle, logOut}

}

export default useFirebase;