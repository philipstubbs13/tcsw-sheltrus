// Firebase config file
// Contains all the configs necessary to connect app with Firebase.
// import Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
	apiKey: "AIzaSyAg4ibnnKA86F7OZ3jXHx5AEYkTXICYiQs",
	authDomain: "tcsw-homeless.firebaseapp.com",
	databaseURL: "https://tcsw-homeless.firebaseio.com",
	projectId: "tcsw-homeless",
	storageBucket: "tcsw-homeless.appspot.com",
	messagingSenderId: "660064181470"
};

firebase.initializeApp(config);
// This exports the auth module of Firebase,
// as well as the Google Auth Provider so that we'll be able to use
// Google Authentication for sign in anywhere inside of our application
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
