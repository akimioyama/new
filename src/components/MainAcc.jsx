import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import PostService from "../API/PostService";


const MainAcc = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"])
  const [login, setLogin] = useState("")
  const [fio, setFio] = useState("")
  const [telepon, setTelepone] = useState("")
  const [email, setEmail] = useState("")

  async function restApi () {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    }
    const respons = await PostService.getInfo(conf);
    setLogin(respons.data.login)
    setFio(respons.data.fio)
    setTelepone(respons.data.telefon)
    setEmail(respons.data.email)
  }

  useEffect(() => {
    restApi()
  }, [])

  const logout = () => {
    removeCookie("role")
    removeCookie("jwt")
  }

  return (
    <div className="mainacc">
      <div className="logout">
        <button className="new_btn new_btn-red" onClick={logout}>Выйти</button>
      </div>
      <h1>
        Личный кабинет: <span className="logn_name">{login}</span>
      </h1>
      <div className="infoUser">
        <h3>Информация о пользователе:</h3>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">ФИО:</div>
          <div className="infoUser_Body_rigth">{fio}</div>
        </div>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">Телефон:</div>
          <div className="infoUser_Body_rigth">{telepon}</div>
        </div>
        <div className="infoUser_Body">
          <div className="infoUser_Body_left">Почта:</div>
          <div className="infoUser_Body_rigth">{email}</div>
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
          <div className="qqq">
            <div className="qq1">
              1
            </div>
            <div className="qq1">
              1
            </div>
            <div className="qq1">
              1
            </div>
          </div>
        </div>
        <div className="infoUserApart_rigth">
            <button className="new_btn new_btn-mini">Добавить</button>
        </div>
      </div>
    </div>
  );
};

export { MainAcc };
