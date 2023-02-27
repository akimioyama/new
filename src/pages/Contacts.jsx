import React from "react";

function Contacts() {
    return ( 
        <div className="main">
        <div className="contacts_main">
          <div className="header_contact">
            <h1 className="h1main6">Свяжитесь с нами</h1>
          </div>
          <div className="forms">
            <div className="namename">
              <div className="namename_left">
                <label htmlFor="">Имя: </label>
              </div>
              <div className="namename_rigth">
                <input type="text" />
              </div>
            </div>
            <div className="namename">
              <div className="namename_left">
                <label htmlFor="">Телефон: </label>
              </div>
              <div className="namename_rigth">
                <input type="text" />
              </div>
            </div>
            <div className="namename">
              <div className="namename_left">
                <label htmlFor="">Почта: </label>
              </div>
              <div className="namename_rigth">
                <input type="text" />
              </div>
            </div>
            <div className="namename">
              <div className="namename_left">
                <label htmlFor="">Сообщение: </label>
              </div>
              <div className="namename_rigth">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="contacts_btn">
              <div className="contacts_btnbtn">
                <button className="btnbtn">Отправить</button>
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
              <a className="a" href="mailto:legion@legin.ru">legion@legin.ru</a>
            </h2>
          </div>
        </div>
      </div>
     );
}

export  {Contacts};