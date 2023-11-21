import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0SLRAFY2s6ZNG41tnLiMUFO_gRgk7idM",
    authDomain: "ecoedventures-55dc3.firebaseapp.com",
    projectId: "ecoedventures-55dc3",
    storageBucket: "ecoedventures-55dc3.appspot.com",
    messagingSenderId: "244095951812",
    appId: "1:244095951812:web:d5a025c9c9a9a1abb97a91",
    measurementId: "G-FFNN9DK57P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()


export {app,auth}