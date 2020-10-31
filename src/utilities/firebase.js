
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgTXKgcXkRnYC-c_pd2DX0JivNKgFqkR4",
    authDomain: "vue-10hours.firebaseapp.com",
    databaseURL: "https://vue-10hours.firebaseio.com",
    projectId: "vue-10hours",
    storageBucket: "vue-10hours.appspot.com",
    messagingSenderId: "696869195153",
    appId: "1:696869195153:web:cb4fe21e749cbac3665e30"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

