// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAGUT6msO69lH330zCFqN6E0cnOgqoRgAg",
//   authDomain: "fir-2bdf9.firebaseapp.com",
//   projectId: "fir-2bdf9",
//   storageBucket: "fir-2bdf9.firebasestorage.app",
//   messagingSenderId: "623867701712",
//   appId: "1:623867701712:web:2a93ede09b4aadfb4ef1d5",
//   measurementId: "G-HKDTH36E6J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGUT6msO69lH330zCFqN6E0cnOgqoRgAg",
  authDomain: "fir-2bdf9.firebaseapp.com",
  projectId: "fir-2bdf9",
  storageBucket: "fir-2bdf9.firebasestorage.app",
  messagingSenderId: "623867701712",
  appId: "1:623867701712:web:2a93ede09b4aadfb4ef1d5",
  measurementId: "G-HKDTH36E6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}


