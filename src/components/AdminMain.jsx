import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PostService from "../API/PostService";
import { ReqList } from "./ReqList";
import { AdminList } from "./AdminList";
import { CreateAdmin } from "./CreateAdmin";

const AdminMain = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);
  const [login, setlogin] = useState("");
  const [fio, setFio] = useState("");
  const [start, setStart] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [post, setPost] = useState([]);

  const logout = () => {
    removeCookie("role");
    removeCookie("jwt");
    removeCookie("id");
  };

  async function restApi() {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    const response = await PostService.getInfoAdmin(conf);
    setlogin(response.data.login);
    setFio(response.data.fio);
  }

  async function restReq(status) {
    if (status == "start") {
      let res = await PostService.getReq(status);
      setStart(res.data);
    } else if (status == "processing") {
      let jwt = cookie?.jwt;
      let conf = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + jwt,
        },
      };
      let res = await PostService.getReqProc(status, conf);
      setProcessing(res.data);
    }
  }
  async function restAdmin() {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let res = await PostService.getAllAdmin(conf);
    setPost(res.data);
  }

  useEffect(() => {
    restApi();
    restAdmin();
    restReq("start");
    restReq("processing");
  }, []);

  async function changeReq() {
    restReq("start");
    restReq("processing");
  }
  const change = () => {
    restApi();
    restAdmin();
    restReq("start");
    restReq("processing");
  };

  return (
    <div className="mainacc">
      <div className="logout">
        <button className="new_btn new_btn-red" onClick={logout}>
          Выйти
        </button>
      </div>
      <h1>
        Личный кабинет: <span className="logn_name">{login}</span>
      </h1>
      <div className="infoUser">
        <h3>Информация о пользователе:</h3>
        <div>
          <div className="infoUser_Body">
            <div className="infoUser_Body_left">ФИО:</div>
            <div className="infoUser_Body_rigth">{fio}</div>
          </div>
        </div>
      </div>
      <div className="workMain">
        <h3>Администрирование сотрудников</h3>
        <div className="adminUser">
          <CreateAdmin changee={change} />
          <p>Активные сотрудники:</p>
          <AdminList post={post} onchange={change} />
        </div>
      </div>
      <div className="workMain">
        <h3>Обработка заявок</h3>
        <div className="workare">
          <div className="workare_left">
            Новые заявки:
            {start.length == 0 ? (
              <div>
                <p>Пусто...</p>
              </div>
            ) : (
              <ReqList post={start} info="start" change={changeReq} />
            )}
          </div>
          <div className="workare_rigth">
            Заявки в работе:
            {processing.length == 0 ? (
              <div>
                <p>Пусто...</p>
              </div>
            ) : (
              <ReqList post={processing} info="processing" change={changeReq} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminMain };
