import React from "react";

const SignUp = () => {
  return (
    <div className="singup">
      <h1>Зарегистрироваться</h1>
      <div className="body_signin">
        <input className="input_signin" type="text" placeholder="Логин" />
        <input className="input_signin" type="text" placeholder="Пароль" />
        <input className="input_signin" type="text" placeholder="Повтроите пароль" />
      </div>
      <button className="new_btn">Зарегистрироваться</button>
    </div>
  );
};

export { SignUp };
