import React from "react";

const Item = (props) => {

    const appi = "http://localhost:3000/house/" + props.post.id
    const image = "https://localhost:44330/api/Image?name=item" +  props.post.id + "_1.jpg"

    return(
        <div className="item">
              <a href={appi}>
                {/* target="_blank" */}
                <div className="item_img">
                  <img className="img" src={image} alt="" />
                  <div className="item_about">
                    <div className="item_about_header">
                      <h1>{props.post.street}, {props.post.house}</h1>
                    </div>
                    <div className="item_about_about">
                      <h3>
                        район {props.post.district}, комнат {props.post.apart}, {props.post.metrov} кв. метров
                      </h3>
                    </div>
                    <div className="item_about_price">
                      <h3>{props.post.price} Rub</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
    )
}

export {Item}