import React from "react";
import PostService from "../../API/PostService";
import { useState } from "react";

const SignIn = ({ onChange, infoRole }) => {
  const [info, setInfo] = useState("");

  async function login() {
    let login = document.getElementById("login_login").value;
    let password = document.getElementById("password_login").value;

    const conf = {
      login: login,
      password: password,
    };
    if (infoRole != "admin") {
      const response = await PostService.login(conf);
      if (response.status == 200) {
        onChange(response.data);
      } else {
        setInfo("Неверный логин или пароль. Попробуйте ввести данные ещё раз");
      }
    }
    else{
      const res = await PostService.loginAdmin(conf)
      if (res.status == 200) {
        onChange(res.data);
      } else {
        setInfo("Неверный логин или пароль. Попробуйте ввести данные ещё раз");
      }
    }
  }

  return (
    <div className="signin">
      <h1>Войти в личный кабинет</h1>
      <div className="body_signin">
        {info == "" ? "" : <span className="infoerr">{info}</span>}
        <input
          id="login_login"
          className="input_signin"
          type="text"
          placeholder="Логин"
        />
        <input
          id="password_login"
          className="input_signin"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <button className="new_btn" onClick={login}>
        Войти
      </button>
    </div>
  );
};

export { SignIn };
