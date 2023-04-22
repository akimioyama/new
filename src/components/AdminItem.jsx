import React from "react";
import PostService from "../API/PostService";
import { useCookies } from "react-cookie";
import { useState } from "react";

const AdminItem = ({ post, change }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);
  const [look, setLook] = useState(false);
  const [newFio, setNewFio] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newRole, setNewRole] = useState("");
  const [err, setErr] = useState("");

  const changeAdminIn = () => {
    if (look == false) {
      setLook(true);
    } else {
      setLook(false);
    }
  };

  async function removeAdmin() {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };

    const res = await PostService.deleteAdmin(post.id, conf);
    change();
  }
  async function changeAdmin() {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let fio = newFio;
    let pass = newPass;
    let role = newRole;

    let data = {
      id: post.id,
      login: post.login,
      password: pass,
      role: role,
      fio: fio,
      dele: false,
    };

    if (pass == "" || fio == "" || role == "") {
      setErr("Заполните все поля");
      console.log("aa");
    } else {
      // console.log(data);
      const res = await PostService.changeAdmin(data, conf);
      // console.log(res)
      changeAdminIn();
      change();
    }
  }

  return (
    <div className="cardAdmin">
      {look == false ? (
        <div>
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">ФИО:</div>
            <div className="cardAdmin_body_rigth">{post.fio}</div>
          </div>
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">Логин:</div>
            <div className="cardAdmin_body_rigth">{post.login}</div>
          </div>
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">Роль:</div>
            <div className="cardAdmin_body_rigth">
              {post.role == "admin"
                ? "Администратор"
                : post.role == "ringer"
                ? "Менеджер"
                : ""}
            </div>
          </div>
          {/* <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">Статус:</div>
            <div className="cardAdmin_body_rigth">
              {post.dele == false ? "Активный" : "Не активный"}
            </div>
          </div> */}
          <div className="cardAdmin_btn">
            <button className="new_btn new_btn-mini mr" onClick={changeAdminIn}>
              Изменить
            </button>
            <button
              className="new_btn new_btn-red new_btn-mini"
              onClick={removeAdmin}
            >
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <div>
          {err == "" ? "" : <div className="errorInfo">{err}</div>}
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">ФИО:</div>
            <input
              id="newfio"
              className="cardAdmin_body_rigth"
              value={newFio}
              onChange={(e) => setNewFio(e.target.value)}
            />
          </div>
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">Пароль:</div>
            <input
              id="newpass"
              type="password"
              className="cardAdmin_body_rigth"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className="cardAdmin_body">
            <div className="cardAdmin_body_left">Роль:</div>
            <select
              id="newrole"
              className="cardAdmin_body_rigth ss"
              onChange={(e) => setNewRole(e.target.value)}
            >
              <option value=""></option>
              <option value="ringer">Менеджер</option>
              <option value="admin">Администратор</option>
            </select>
          </div>
          <div className="cardAdmin_btn">
            <button className="new_btn new_btn-mini mr" onClick={changeAdmin}>
              Изменить!
            </button>
            <button
              className="new_btn new_btn-red new_btn-mini"
              onClick={changeAdminIn}
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { AdminItem };
