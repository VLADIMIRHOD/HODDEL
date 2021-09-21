import React from 'react';
import './style/auth.css'

function Auth() {
  return (
    <div className="Container">
        <form action="alert(1)" method="post" onsubmit="return false;">
          <section>
            <label for="name">Логин:</label>
            <input type="text" id="name" name="user_name"/>
          </section>
          <section>
            <label for="mail">Пароль:</label>
            <input type="password" id="mail" name="user_mail"/>
          </section>
          <button type="submit">Войти</button>
          <button type="submit">Регистрция</button>
        </form>
    </div>
  )
}

export default Auth
