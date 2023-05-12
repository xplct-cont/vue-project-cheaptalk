import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6H_yZ0sZ-kXyvqU_aosbSnnX_L0jmTSo",
  authDomain: "vue-project-1-3d191.firebaseapp.com",
  projectId: "vue-project-1-3d191",
  storageBucket: "vue-project-1-3d191.appspot.com",
  messagingSenderId: "1065959393015",
  appId: "1:1065959393015:web:963b196f2f1bc12afbb5f2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
