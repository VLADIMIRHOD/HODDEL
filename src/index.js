import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{
    app,
    auth
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);
