require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "letsmakeagame-13447.firebaseapp.com",
    projectId: "letsmakeagame-13447",
    storageBucket: "letsmakeagame-13447.appspot.com",
    messagingSenderId: "492057155348",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-M10XX1QCG0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
}

function loginHiding() {

}