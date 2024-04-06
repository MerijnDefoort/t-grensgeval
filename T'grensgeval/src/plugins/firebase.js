/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGI3iUjv-lS32-F0bumtnu5EK9-ExeV4s',
  authDomain: 't-grensgeval.firebaseapp.com',
  projectId: 't-grensgeval',
  storageBucket: 't-grensgeval.appspot.com',
  messagingSenderId: '339004280384',
  appId: '1:339004280384:web:60ee411251390d6762d9a5',
  measurementId: 'G-QZN2WZF5VN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
