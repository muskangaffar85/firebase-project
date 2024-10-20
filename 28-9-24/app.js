// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCNfe6t6KpR1DdZc-dLObuhE2BG0q3n2M",
    authDomain: "web-app-project-bb6e8.firebaseapp.com",
    projectId: "web-app-project-bb6e8",
    storageBucket: "web-app-project-bb6e8.appspot.com",
    messagingSenderId: "995424022140",
    appId: "1:995424022140:web:06e32105de5453973223f9",
    measurementId: "G-J6KGXDDV6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill out both email and password fields.');
        return;
    }

    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            alert('Sign up successful! Welcome, ' + user.email);
            window.location.pathname = 'signin.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Error signing up:', errorMessage);
            alert('Error: ' + errorMessage);
        });
}

// Attach event listener to sign-up button
document.getElementById('signupButton')?.addEventListener('click', signup);

// Signin Function
function signin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill out both email and password fields.');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Signed in successfully: ', user);
            alert('Logged in...');
            sessionStorage.setItem("user", user.email);
            window.location.pathname = './welcome.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Error signing in:', errorMessage);
            alert('Error: ' + errorMessage);
        });
}

// Attach event listener to login button
document.getElementById('loginButton')?.addEventListener('click', signin);

// Google Sign-In Function
function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log('Google Sign-In successful: ', user);
            alert('Logged in with Google: ' + user.email);
            sessionStorage.setItem("user", user.email);
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Error with Google Sign-In:', errorMessage);
            alert('Error: ' + errorMessage);
        });
}

// Attach event listener to Google sign-in button
document.getElementById('googleSignInButton')?.addEventListener('click', googleSignIn);




