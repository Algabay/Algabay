
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeebSVmTPoiYZ_yyEtvVNzZiOTPK02RXA",
  authDomain: "algabay-ai-auth.firebaseapp.com",
  projectId: "algabay-ai-auth",
  storageBucket: "algabay-ai-auth.appspot.com",
  messagingSenderId: "1037554339952",
  appId: "1:1037554339952:web:bed0c908602305e16c64b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
