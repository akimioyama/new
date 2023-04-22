import React from "react";
import { useState } from "react";
import PostService from "../API/PostService";
import { useCookies } from "react-cookie";


const CreateAdmin = ({changee}) => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);
  const [look, setLook] = useState(false);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const [fio, setFio] = useState("");
  const [err, setErr] = useState("");

  const looking = () => {
    if (look == false) {
      setLook(true);
    } else {
      setLook(false);
      setFio("");
      setLogin("");
      setPass("");
      setRole("");
    }
  };

  async function createAdmin() {
    let data = {
      id: 0,
      login: login,
      password: pass,
      role: role,
      fio: fio,
      dele: false,
    };
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    // console.log(data)
    if (login != "" || pass != "" || role != "" || fio != "") {
        const res = await PostService.createAdmin(data, conf)
        console.log(res)
        looking()
        changee()
    } else {
      setErr("Заполните все поля");
    }
  }

  return (
    <div>
      <button className="new_btn new_btn-mini" onClick={looking}>
        Добавить сотрудника
      </button>
      {look == false ? (
        ""
      ) : (
        <div className="cardAdmin">
          <div>
            {err == "" ? "" : <div className="errorInfo">{err}</div>}
            <div className="cardAdmin_body">
              <div className="cardAdmin_body_left">Логин:</div>
              <input
                className="cardAdmin_body_rigth"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="cardAdmin_body">
              <div className="cardAdmin_body_left">Пароль:</div>
              <input
                className="cardAdmin_body_rigth"
                value={pass}
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="cardAdmin_body">
              <div className="cardAdmin_body_left">Роль:</div>
              <select
                className="cardAdmin_body_rigth ss"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value=""></option>
                <option value="ringer">Менеджер</option>
                <option value="admin">Администратор</option>
              </select>
            </div>
            <div className="cardAdmin_body">
              <div className="cardAdmin_body_left">ФИО:</div>
              <input
                className="cardAdmin_body_rigth"
                value={fio}
                onChange={(e) => setFio(e.target.value)}
              />
            </div>
            <button className="new_btn new_btn-mini" onClick={createAdmin}>
              Создать!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { CreateAdmin };
