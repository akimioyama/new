import React, { useState } from "react";
import PostService from "../API/PostService";
import { useCookies } from "react-cookie";


const ReqItem = ({ post, change }) => {
  const [err, setErr] = useState("");
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);


  async function takeReq() {
    setErr("");
    let data = {
        id_request: post.id_request,
        name: post.name,
        telepone: post.telepone,
        email: post.email,
        text: post.text,
        status: post.status,
        startDate: post.startDate,
        endDate: post.endDate,
        id_empl: Number(cookie?.id)
    };
    let response = await PostService.changeStatus(data);
    if (response.data == "Update") {
      change();
    } else {
      setErr("Ошибка. Попробуй ещё раз");
    }
  }

  return (
    <div className="reqitem">
      {err == "" ? "" : <span className="errorInfo">{err}</span>}
      <div className="reqitem_body">
        <span className="bold">Имя: </span> {post.name}
      </div>
      <div className="reqitem_body">
        <span className="bold">Телефон: </span> {post.telepone}
      </div>
      <div className="reqitem_body">
        <span className="bold">Почта: </span> {post.email}
      </div>
      <div className="reqitem_body">
        <span className="bold">Текст: </span>
        <span className="overflow">{post.text}</span>
      </div>
      {post.status == "start" ? (
        <button className="new_btn new_btn-minimin" onClick={takeReq}>
          Взять в работу
        </button>
      ) : (
        <button className="new_btn new_btn-red new_btn-minimin" onClick={takeReq}>
          Завершить
        </button>
      )}
    </div>
  );
};

export { ReqItem };
