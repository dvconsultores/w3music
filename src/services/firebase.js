import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//Chat testnet
//Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAogyHNNPfawxx22Iphb2cf9Yjtu7fzSgQ",
//   authDomain: "nearp2p-ff014.firebaseapp.com",
//   databaseURL: "https://nearp2p-ff014-default-rtdb.firebaseio.com",
//   projectId: "nearp2p-ff014",
//   storageBucket: "nearp2p-ff014.appspot.com",
//   messagingSenderId: "321404603196",
//   appId: "1:321404603196:web:3645c05b9d1adfe61fac39"
// };

//Chat Mainnet
const firebaseConfig = {
  apiKey: "AIzaSyD3A4gu6KMPj3jyoUDpmv6xCfk2JcuvBmA",
  authDomain: "w3music-39365.firebaseapp.com",
  projectId: "w3music-39365",
  storageBucket: "w3music-39365.appspot.com",
  messagingSenderId: "588067526382",
  appId: "1:588067526382:web:5ef70c9d51abb60763c5ff",
  measurementId: "G-7EJ4M99T5T",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase.firestore();
