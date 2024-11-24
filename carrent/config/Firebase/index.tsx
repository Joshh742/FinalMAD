// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_1SO5aQbluYRqcT19m1Hm-hlaYiqxNHQ',
  authDomain: 'finalmad-a013e.firebaseapp.com',
  projectId: 'finalmad-a013e',
  storageBucket: 'finalmad-a013e.firebasestorage.app',
  messagingSenderId: '684445237623',
  appId: '1:684445237623:web:1cf906633ad5803bf8a172',
  databaseURL: 'https://finalmad-a013e-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
