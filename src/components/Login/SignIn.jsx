import React from "react";

const SignIn = () => {
  return (
    <div className="signin">
      <h1>Войти в личный кабинет</h1>
      <div className="body_signin">
        <input className="input_signin" type="text" placeholder="Логин" />
        <input className="input_signin" type="text" placeholder="Пароль" />
      </div>
      <button className="new_btn">Войти</button>
    </div>
  );
};

export { SignIn };
