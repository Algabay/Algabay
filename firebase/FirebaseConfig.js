// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIbnJ4Ebfo6NB9MdOlFuIr7g1U9At_TnE",
  authDomain: "algabay-auth.firebaseapp.com",
  projectId: "algabay-auth",
  storageBucket: "algabay-auth.appspot.com",
  messagingSenderId: "44208267254",
  appId: "1:44208267254:web:5a3becf1224915a1e1b1d7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
