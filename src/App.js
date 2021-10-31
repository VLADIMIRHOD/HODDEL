import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./style/App.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsYA5wOw-0l2c4lyuIKYDDxYBjmamxLjk",
  authDomain: "hoddel-task-list.firebaseapp.com",
  databaseURL: "https://hoddel-task-list-default-rtdb.firebaseio.com",
  projectId: "hoddel-task-list",
  storageBucket: "hoddel-task-list.appspot.com",
  messagingSenderId: "863150063598",
  appId: "1:863150063598:web:ad519c0990c55eca33d8ff",
  measurementId: "G-QB360H4WPC",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

function App(props) {
  return (
    <BrowserRouter>
      <AppRouter />
      <div>222</div>
    </BrowserRouter>
  );
}
export default App;
