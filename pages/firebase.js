import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBN9Cj1KuL5txbhjrytnehSGwXf1lrFQeI",
    authDomain: "laliga-live.firebaseapp.com",
    databaseURL: "https://laliga-live.firebaseio.com",
    projectId: "laliga-live",
    storageBucket: "laliga-live.appspot.com",
    messagingSenderId: "90823868839",
    appId: "1:90823868839:web:e567f6908274b7d8243682"
};

firebase.initializeApp(firebaseConfig);
export default firebase;