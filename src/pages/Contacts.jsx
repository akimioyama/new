import React from "react";
import { useState } from "react";
import PostService from "../API/PostService";

function Contacts() {
  const [err, setErr] = useState("");
  async function sendReq() {
    setErr("");

    let name = document.getElementById("name").value;
    let telepone = document.getElementById("telepone").value;
    let email = document.getElementById("email").value;
    let text = document.getElementById("text").value;

    if (name == "" || telepone == "" || email == "" || text == "") {
      setErr("Заполните все поля");
    } else {
      let date = new Date();
      let data = {
        id_request: 0,
        name: name,
        telepone: telepone,
        email: email,
        text: text,
        status: "start",
        startDate: date.toLocaleString(),
        endDate: null,
      };
      console.log(data)
      document.getElementById("name").value = "";
      document.getElementById("telepone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("text").value = "";
      
      const response = await PostService.createReq(data)
      console.log(response.data)
      if (response.data == "Added"){
        alert("Вашу заявку приняли. Ждите обратной связи")
      }
      else{
        setErr("Произошла ошибка. Попробуйте снова")
      }
    }
  }

  return (
    <div className="main">
      <div className="contacts_main">
        <div className="header_contact">
          <h1 className="h1main6">Свяжитесь с нами</h1>
        </div>
        <div className="forms">
          {err == "" ? "" : <div className="errorInfo mar mar-left">{err}</div>}
          <div className="namename">
            <div className="namename_left">
              <label htmlFor="">Имя: </label>
            </div>
            <div className="namename_rigth">
              <input type="text" id="name" />
            </div>
          </div>
          <div className="namename">
            <div className="namename_left">
              <label htmlFor="">Телефон: </label>
            </div>
            <div className="namename_rigth">
              <input type="text" id="telepone" />
            </div>
          </div>
          <div className="namename">
            <div className="namename_left">
              <label htmlFor="">Почта: </label>
            </div>
            <div className="namename_rigth">
              <input type="text" id="email" />
            </div>
          </div>
          <div className="namename">
            <div className="namename_left">
              <label htmlFor="">Сообщение: </label>
            </div>
            <div className="namename_rigth">
              <textarea name="" id="text" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="contacts_btn">
            <div className="contacts_btnbtn">
              <button className="btnbtn" onClick={sendReq}>
                Отправить
              </button>
            </div>
          </div>
        </div>
        <div className="header_contact">
          <h1 className="h1main7">Или позвоните нам</h1>
        </div>
        <div className="contacts_tele">
          <h2>8-990-232-34-34</h2>
          <h2>8-990-232-54-34</h2>
          <h2>8-990-232-34-54</h2>
          <h2>
            Почта:
            <a className="a" href="mailto:legion@legin.ru">
              legion@legin.ru
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export { Contacts };
