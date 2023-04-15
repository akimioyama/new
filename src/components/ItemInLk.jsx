import React from "react";
import PostService from "../API/PostService";
import { useCookies } from "react-cookie";

const ItemInLk = (props) => {
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);

  const appi = "http://localhost:3000/house/" + props.post.id;
  const image =
    "https://localhost:44330/api/Image?name=item" + props.post.id + "_1.jpg";

  async function changeForRent(event) {
    event.preventDefault();
    event.stopPropagation();
    const data = props.post.id;
    let jwt = cookie?.jwt;
    console.log("https://localhost:44330/api/Aparts/forrent/" + data)
    let conf = {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    };
    console.log(conf)
    const respons = await PostService.changeForRent(data, conf);
    console.log(respons);
  }

  return (
    <div className="item">
      <a href={appi}>
        {/* target="_blank" */}
        <div className="item_img">
          <img className="img" src={image} alt="" />
          <div className="item_about">
            <div className="item_about_header">
              <h1>
                {props.post.street}, {props.post.house}
              </h1>
            </div>
            <div className="item_about_about">
              <h3>
                район {props.post.district}, комнат {props.post.apart},{" "}
                {props.post.metrov} кв. метров
              </h3>
            </div>
            <div className="item_about_price">
              <h3>{props.post.price} Rub</h3>
            </div>
            {props.post.for_rent == 1 ? (
              <div className="qqq">
                <button
                  onClick={changeForRent}
                  className="new_btn new_btn-red new_btn-mini"
                >
                  Снять объявление
                </button>
              </div>
            ) : (
              <div className="qqq">
                <button
                  onClick={changeForRent}
                  className="new_btn new_btn-mini"
                >
                  Включить в поиск
                </button>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export { ItemInLk };
