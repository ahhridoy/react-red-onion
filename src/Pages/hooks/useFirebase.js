import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(user.result)
        })
    }

    const signInUsingGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(user.result);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
        .then(() => {});
    }

    return {
        user,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }

}

export default useFirebase;