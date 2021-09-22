import React, { useState }  from 'react';
import classes from './style/auth.module.css'

function Auth() {
  const [Login, setLogin] = useState('')
  const [Pass, setPass] = useState('')

  function login(e) {
    alert([Login, Pass])
    e.preventDefault()
  }
  
  function registration(e) {
    alert("registration")
    e.preventDefault()
  }

  return (
    <div className={classes.Container}>
        <form className={classes.authForm} action="alert(1)" method="post" autocomplete="off">
          <input 
            className={classes.formItem} type="text" id="name" name="user_name" placeholder=" Логин" 
            value={Login}
            onChange={event => setLogin(event.target.value)}
          />
          <input className={classes.formItem}  type="password" id="password" name="user_passwordc" placeholder=" Пароль"
          value={Pass}
          onChange={event => setPass(event.target.value)}
          />
          <button className={classes.formItem} type="submit" onClick={login}>Войти</button>
          <button className={classes.formItem} type="submit" onClick={registration}>Регистрация</button>
        </form>
    </div>
  )
}

export default Auth
