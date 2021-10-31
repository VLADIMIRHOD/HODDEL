import React, { useState, useContext } from "react";
import { Context } from "../..";
import classes from "./style/auth.module.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

function Auth(props) {
  const { auth } = useContext(Context);

  const [Login, setLogin] = useState("");
  const [Pass, setPass] = useState("");

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, "boy.k.a@mail.ru", 123456)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function registration(e) {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("login true");
        // ...
      } else {
        console.log("login fasle");
        // User is signed out
        // ...
      }
    });
  }
  function exit(e) {
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className={classes.Container}>
      <form
        className={classes.authForm}
        action="alert(1)"
        method="post"
        autoComplete="off"
      >
        <input
          className={classes.formItem}
          type="text"
          id="name"
          name="user_name"
          placeholder=" Логин"
          value={Login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          className={classes.formItem}
          type="password"
          id="password"
          name="user_passwordc"
          placeholder=" Пароль"
          value={Pass}
          onChange={(event) => setPass(event.target.value)}
        />
        <button className={classes.formItem} type="submit" onClick={login}>
          Войти
        </button>
        <button
          className={classes.formItem}
          type="submit"
          onClick={registration}
        >
          Регистрация
        </button>
        <button
          className={classes.formItem}
          type="submit"
          onClick={exit}
        >
          Выход
        </button>
      </form>
    </div>
  );
}

export default Auth;
