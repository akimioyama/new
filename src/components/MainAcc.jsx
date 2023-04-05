import React from "react";
import { useState } from "react";

const MainAcc = () => {
  const [login, setLogin] = useState("akimioasd");

  return (
    <div className="mainacc">
      <h1>
        Личный кабинет: <span className="logn_name">{login}</span>
      </h1>
      <div className="infoUser">
        <h3>Информация о пользователе:</h3>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">ФИО:</div>
          <div className="infoUser_Body_rigth">Иванов Иван Иваннович</div>
        </div>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">Телефон:</div>
          <div className="infoUser_Body_rigth">+79209289848</div>
        </div>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">Почта:</div>
          <div className="infoUser_Body_rigth">no.pers@bk.ru</div>
        </div>
      </div>
      <div>
        <button className="new_btn new_btn-mini">Изменить</button>
      </div>
      <div className="infoUserApart">
        <div className="infoUserApart_left">
          <div className="infoUserApart_header">
            <h3>Список объявлений:</h3>
          </div>
          <div>Тут будет список добавленных</div>
        </div>
        <div className="infoUserApart_rigth">
            <button className="new_btn new_btn-mini">Добавить</button>
        </div>
      </div>
    </div>
  );
};

export { MainAcc };
