import app from 'firebase/app'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmXNhPZxzZ6BIjTcoGNj1du1K9aVWTTvU",
    authDomain: "pruebafirebase-933b2.firebaseapp.com",
    projectId: "pruebafirebase-933b2",
    storageBucket: "pruebafirebase-933b2.appspot.com",
    messagingSenderId: "944339117070",
    appId: "1:944339117070:web:4c992eeac90cd84a60085f"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth() 
export const db = app.firestore()
export const storage = app.storage()