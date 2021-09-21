import React from 'react';
import classes from './style/auth.module.css'

function Auth() {
  return (
    <div className={classes.Container}>
        <form className={classes.authForm} action="alert(1)" method="post" autocomplete="off">
          <input className={classes.formItem} type="text" id="name" name="user_name" placeholder=" Логин"/>
          <input className={classes.formItem}  type="password" id="password" name="user_passwordc" placeholder=" Пароль"/>
          <button className={classes.formItem} type="submit" onClick={login}>Войти</button>
          <button className={classes.formItem} type="submit" onClick={registration}>Регистрация</button>
        </form>
    </div>
  )
}

export default Auth

function login(e) {
  alert("login")
  e.preventDefault()
}

function registration(e) {
  alert("registration")
  e.preventDefault()
}