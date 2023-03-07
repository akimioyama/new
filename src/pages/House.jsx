import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { MySlider } from "../components/UI/MySlider/MySlider";

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const qwe = []

  async function Api() {
    setIsLoading(true);
    const response = await PostService.getOne(id);
    setHouse(response.data);
    setIsLoading(false);

    const idid = response.data.id;
    const pic = response.data.count_pic;
    console.log(idid, pic)

    for(let i = 1; i <= pic; i++){
      let temp = "https://localhost:44330/api/Image?name=item" + idid 
      + "_" + i + ".jpg"
      qwe.push(temp)
    }
    setPhoto(qwe)
  }

  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="main">
      <div className="item_main">
        <div className="item_header">
          <div className="item_header1">
            <h1 className="h1main10">
              улица {house.street}, {house.house}
            </h1>
          </div>

          <div className="carousel">
            <MySlider ph={photo} />
          </div>

          <div className="item_footer">
            <div className="item_footer_left">
              <h2>Характеристика объекта</h2>
              <div className="specifications">
                <div className="specifications_left">Тип</div>
                <div className="specifications_rigth">
                  <span className="item_c">{house.apart}</span>-х комнатная
                  квартира
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Этаж</div>
                <div className="specifications_rigth">
                  <span className="it">{house.floor}</span>/{house.floors}
                </div>
              </div>

              <div className="specifications">
                {/* <div className="specifications_left">Удобства</div> */}
                <div className="specifications_left">С мебель</div>
                <div className="specifications_rigth">
                  {house.furniture == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">С техникой</div>
                <div className="specifications_rigth">
                  {house.technic == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">EVRO-ремонт</div>
                <div className="specifications_rigth">
                  {house.evro_repair == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Можно с животными</div>
                <div className="specifications_rigth">
                  {house.animals == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Есть лифт</div>
                <div className="specifications_rigth">
                  {house.elevator == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Есть балкон</div>
                <div className="specifications_rigth">
                  {house.balcony == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Есть лоджия</div>
                <div className="specifications_rigth">
                  {house.loggia == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Стены</div>
                <div className="specifications_rigth">{house.walls}</div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Новостройка</div>
                <div className="specifications_rigth">
                  {house.new_building == 1 ? (
                    <span className="it">Да</span>
                  ) : (
                    <span className="it">Нет</span>
                  )}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Тип дома</div>
                <div className="specifications_rigth">
                  {house.type_of_house}
                </div>
              </div>
              <div className="specifications">
                <div className="specifications_left">Ванная или душ</div>
                <div className="specifications_rigth">
                  {house.bathroom_shower}
                </div>
              </div>
            </div>
            <div className="item_footer_rigth">
              <br />

              <div className="specifications">
                <div className="specifications_left">Плита</div>
                <div className="specifications_rigth">
                  {house.kitchen_stove}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Высота потолков</div>
                <div className="specifications_rigth">
                  {house.ceiling_height}
                </div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Санузел</div>
                <div className="specifications_rigth">{house.lavatory}</div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Район</div>
                <div className="specifications_rigth">{house.district}</div>
              </div>

              <div className="specifications">
                <div className="specifications_left">Стоимость в месяц</div>
                <div className="specifications_rigth">
                  <span className="it">{house.price}</span> рублей + к/у.
                </div>
              </div>

              <h2>Описание объекта</h2>
              <div className="item_footer_rigth_text">{house.text}</div>
              <div className="idid">
                <div className="idid_code">Код объекта:</div>
                <div className="code">{house.id}</div>
                <div className="item_btn">
                  <button className="btnbtn">Связатсья с нами</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { House };
