// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsrUGJiIaKei_R-UPk8dW2WMRTkf2hHWc',
  authDomain: 'moneytracker-mad-ec20b.firebaseapp.com',
  projectId: 'moneytracker-mad-ec20b',
  storageBucket: 'moneytracker-mad-ec20b.firebasestorage.app',
  messagingSenderId: '705152115682',
  appId: '1:705152115682:web:974841214bbe8b633b4fbb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
