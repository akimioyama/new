import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import PostService from "../API/PostService";
import { CreateApart } from "./CreateApart";
import { PostList } from "../components/PostList"

const MainAcc = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);
  const [login, setLogin] = useState("");
  const [fio, setFio] = useState("");
  const [telepon, setTelepone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const [newFio, setNewFio] = useState('');
  const [newTel, setNewTel] = useState('');
  const [newEmail, setNewEmail] = useState('');

  async function restApi() {
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    const respons = await PostService.getInfo(conf);
    setLogin(respons.data.login);
    setFio(respons.data.fio);
    setTelepone(respons.data.telefon);
    setEmail(respons.data.email);
    setId(respons.data.id_arendatel);

    setNewFio(respons.data.fio)
    setNewEmail(respons.data.email)
    setNewTel(respons.data.telefon)
  }

  useEffect(() => {
    restApi();
    restPost();
  }, []);

  const logout = () => {
    removeCookie("role");
    removeCookie("jwt");
    removeCookie("id");
  };

  const [look, setLook] = useState(false);
  function createApp() {
    if (look == true) {
      setLook(false);
    } else {
      setLook(true);
    }
  }
  function qwewqe() {
    setLook(false);
  }

  const [changeInfo, setChangeInfo] = useState(false);
  const changeUser = () => {
    setChangeInfo(true);
  };
  const closeChange = () => {
    setChangeInfo(false);
    setNewFio(fio)
    setNewEmail(email)
    setNewTel(telepon)
  };


  const [error, setError] = useState("")
  async function newInfoUser() {
    let data = {
      "login": "string",
      "password": "string",
      "telepon": newTel,
      "email": newEmail,
      "fio": newFio
    }
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    let respons = await PostService.changeUser(data, conf)
    if(respons.data == "Изменили"){
      setChangeInfo(false)
      restApi()
    }
    else{
      setError(respons.data)
    }
  };

  const [post, setPost] = useState([])
  async function restPost(){
    let jwt = cookie?.jwt;
    let conf = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };
    const respons = await PostService.getApartById(conf)
    setPost(respons.data)
  }
  const change = () => {
    restPost()
  }

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
        {changeInfo == false ? (
          <div>
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
            <button className="new_btn new_btn-mini" onClick={changeUser}>
              Изменить
            </button>
          </div>
        ) : (
          <div>
            {error == "" ? "" : (<div className="errorInfo">{error}</div>)}
            <div className="infoUser_Body">
              <div className="infoUser_Body_left">ФИО:</div>
              <input
                className="infoUser_Body_rigth_input"
                value={newFio}
                onChange={(event) => setNewFio(event.target.value)}
              />
            </div>
            <div className="infoUser_Body">
              <div className="infoUser_Body_left">Телефон:</div>
              <input
                className="infoUser_Body_rigth_input"
                value={newTel}
                onChange={(event) => setNewTel(event.target.value)}
              />
            </div>
            <div className="infoUser_Body">
              <div className="infoUser_Body_left">Почта:</div>
              <input
                className="infoUser_Body_rigth_input"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
              />
            </div>
            <div>
              <button className="new_btn new_btn-mini" onClick={newInfoUser}>
                Изменить информацию
              </button>
            </div>
            <div>
              <button
                className="new_btn new_btn-red new_btn-mini"
                onClick={closeChange}
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </div>
      <div></div>
      <div className="infoUserApart">
        <div className="infoUserApart_left">
          <div className="infoUserApart_header">
            <h3>Список объявлений:</h3>
            {look == true ? <CreateApart id_user={id} onChange={qwewqe} /> : ""}
            <div className="postlist_user">
              {post != [] ? (
                <PostList change1={change} posts={post} local={"lk"} />
              ) : (
                <div>Вы не добавили ни одного объявления</div>
              )}
            </div>
          </div>
        </div>
        <div className="infoUserApart_rigth">
          <button className="new_btn new_btn-mini" onClick={createApp}>
            Окно добавления
          </button>
        </div>
      </div>
    </div>
  );
};

export { MainAcc };
