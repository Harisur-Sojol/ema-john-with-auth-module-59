import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
steps for authentication
----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

-------------------
Step: 2
1. Create Login Component
2. Create Register Component
3. create Route For Login And Register

--------------------
Step: 3
1. set up sign in method
2. set up sign out method
3. user state
4. special observer(useEffect)
5. return necessary methods and states from useFirebase

---------------------
Step: 4
1. Create a Auth context 
2. Create context provider
3. st context Provider Context value
4. use Auth Provider 
5. create useAuth Hook

---------------------
Step: 5
1. Create Private Route
2. Set Private Route

---------------------
Step: 6 :Redirect After Login
1. after login redirect user to their desired destination
*/