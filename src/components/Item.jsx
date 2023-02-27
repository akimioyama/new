import React from "react";

const Item = (props) => {

    const appi = "http://localhost:3000/house/" + props.post.id

    return(
        <div className="item">
              <a href={appi}>
                <div className="item_img">
                  <img className="img" src="/img/test1.jpg" alt="" />
                  <div className="item_about">
                    <div className="item_about_header">
                      <h1>{props.post.title}</h1>
                    </div>
                    <div className="item_about_about">
                      <h3>
                        {}
                      </h3>
                    </div>
                    <div className="item_about_price">
                      <h3>10 000 Rub</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
    )
}

export {Item}