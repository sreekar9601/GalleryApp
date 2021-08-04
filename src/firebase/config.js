import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBRePSjVHsjtCc_VL8kbq5gIeyKCBo2x6k",
    authDomain: "ninja-gallery-54d62.firebaseapp.com",
    projectId: "ninja-gallery-54d62",
    storageBucket: "ninja-gallery-54d62.appspot.com",
    messagingSenderId: "334788406764",
    appId: "1:334788406764:web:f8c60e3783dcd0f7e5a4c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();//for the firestore database
  
  export {projectStorage, projectFirestore};