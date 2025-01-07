
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
console.log(process.env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_apoId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}