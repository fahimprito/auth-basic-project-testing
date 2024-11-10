import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('current User', currentUser);
                setUser(currentUser)
            }
            else {
                console.log('no user logged in');
            }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
};

export default AuthProvider;