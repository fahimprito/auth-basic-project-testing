// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_BVmjlCGlfeAwiDRQtCpdd2lzsKmTx5k",
    authDomain: "auth-basic-project-testing.firebaseapp.com",
    projectId: "auth-basic-project-testing",
    storageBucket: "auth-basic-project-testing.firebasestorage.app",
    messagingSenderId: "531684740274",
    appId: "1:531684740274:web:0d48fa43560ceeade68dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);