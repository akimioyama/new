import React, { useState } from "react";
import PostService from "../../API/PostService";

const SignUp = () => {
  async function signUp() {
    let login = document.getElementById("login_reg").value
    let fio = document.getElementById("fio_reg").value
    let tel = document.getElementById("tel_reg").value
    let email = document.getElementById("email_reg").value
    let pass = document.getElementById("pass_reg").value
    let passw = document.getElementById("pass_reg2").value

    if(login != "" && fio != "" && tel != "" &&
       email != "" && pass != "" && passw != ""){
        if (pass == passw){
          let conf = {
            login: login,
            password: pass,
            telepon: tel,
            email: email,
            fio: fio
          }
          const response = await PostService.register(conf)
          if (response.data == "Добавили"){
            setInfo(response.data)
          }
          else {
            setInfo(response.data)
          }
        }
        else{
          setInfo("Пароли не совпадают")
        }
      }
    else {
      setInfo("Заполните все поля")
    }

    

  };

  const [info, setInfo] = useState("");

  return (
    <div className="singup">
      <h1>Зарегистрироваться</h1>
      <div className="body_signin">
        {info == "" ? "" : <span className="infoerr">{info}</span>}
        <input id="login_reg" className="input_signin" type="text" placeholder="Логин" />
        <input id="fio_reg" className="input_signin" type="text" placeholder="ФИО" />
        <input id="tel_reg" className="input_signin" type="text" placeholder="Телефон" />
        <input id="email_reg" className="input_signin" type="text" placeholder="Почта" />
        <p></p>
        <input id="pass_reg" className="input_signin" type="password" placeholder="Пароль" />
        <input id="pass_reg2"
          className="input_signin"
          type="password"
          placeholder="Повтроите пароль"
        />
      </div>
      <button className="new_btn" onClick={signUp}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export { SignUp };
