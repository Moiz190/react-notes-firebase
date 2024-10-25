import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOc6zMvOQiV69Y67H3ylSzF892iQT_cB0",
  authDomain: "react-notes-project-3a0b5.firebaseapp.com",
  projectId: "react-notes-project-3a0b5",
  storageBucket: "react-notes-project-3a0b5.appspot.com",
  messagingSenderId: "80491473821",
  appId: "1:80491473821:web:747a50eadaae734dbc1d74",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app}