import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { MySlider } from "../components/UI/MySlider/MySlider";
import { useCookies } from "react-cookie";

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(["role"]);
  const [user, setUser] = useState(false);
  const [newPrice, setNewPrice] = useState();
  const [newText, setNewText] = useState();

  const qwe = [];

  async function Api() {
    setIsLoading(true);
    const response = await PostService.getOne(id);
    setHouse(response.data);
    setIsLoading(false);

    setNewPrice(response.data.price);
    setNewText(response.data.text);

    const idid = response.data.id;
    const pic = response.data.count_pic;

    for (let i = 1; i <= pic; i++) {
      let temp =
        "https://localhost:44330/api/Image?name=item" + idid + "_" + i + ".jpg";
      qwe.push(temp);
    }
    setPhoto(qwe);
    if (cookie?.id == response.data.id_arendatel || cookie?.role == "admin") {
      setUser(true);
    }
    setChange(false);
  }

  useEffect(() => {
    Api();
  }, []);

  const [change, setChange] = useState(false);
  const changeinfo = () => {
    if (change == false) {
      setChange(true);
    } else {
      setChange(false);
      setNewText(house.text);
      setNewPrice(house.price);
    }
  };
  async function changeInfoAboutApp() {
    let price = document.getElementById("newPrice").value;
    let furniture = document.getElementById("select_furniture").value;
    let technic = document.getElementById("select_technic").value;
    let evro_repair = document.getElementById("select_evro_repair").value;
    let animals = document.getElementById("select_animals").value;
    let elevator = document.getElementById("select_elevator").value;
    let walls = document.getElementById("select_walls").value;
    let text = document.getElementById("newText").value;

    if (furniture == "false") {
      furniture = false;
    } else {
      furniture = true;
    }
    if (technic == "false") {
      technic = false;
    } else {
      technic = true;
    }
    if (evro_repair == "false") {
      evro_repair = false;
    } else {
      evro_repair = true;
    }
    if (animals == "false") {
      animals = false;
    } else {
      animals = true;
    }
    if (elevator == "false") {
      elevator = false;
    } else {
      elevator = true;
    }

    let data = {
      id: house.id,
      price: price,
      furniture: furniture,
      technic: technic,
      evro_repair: evro_repair,
      animals: animals,
      elevator: elevator,
      walls: String(walls),
      text: text,
    };

    const jwt = cookie?.jwt;
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + jwt,
      },
    };

    if (cookie?.role == "user") {
      let response = await PostService.changeInfoApp(data, config);
      if (response.data == "Изменили") {
        Api();
      }
    }
  }

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
              <div className="specifications">
                <div className="specifications_left">Площадь: </div>
                <div className="specifications_rigth">
                  <span className="it">{house.metrov}</span> кв. метров
                </div>
              </div>

              <h2>Описание объекта</h2>
              <div className="item_footer_rigth_text">{house.text}</div>
              <div className="idid">
                <div className="idid_code">Код объекта:</div>
                <div className="code">{house.id}</div>
              </div>
              <div className="item_btn">
                {user == true ? (
                  <div>
                    <div className="item_btn_f">
                      <button className="new_btn" onClick={changeinfo}>
                        Изменить
                      </button>
                    </div>
                    <div className="item_btn_f">
                      <button className="new_btn new_btn-red">Удалить?!</button>
                    </div>
                  </div>
                ) : (
                  <button className="new_btn">Связатсья с нами</button>
                )}
              </div>
            </div>
          </div>
        </div>
        {change == false ? (
          ""
        ) : (
          <div className="changeInfo">
            <h2>Все поля обязательны для заполнения</h2>
            <div className="specifications_ch">
              <div className="specifications">
                <div className="specifications_left">Стоимость в месяц</div>
                <div className="specifications_rigth">
                  <input
                    id="newPrice"
                    className="fontsize22"
                    type="text"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="specifications">
                <div className="specifications_left">С мебелью</div>
                {house.furniture == 1 ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_furniture">
                      <option value="true">Да</option>
                      <option value="false">Нет</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_furniture">
                      <option value="false">Нет</option>
                      <option value="true">Да</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">С техникой</div>
                {house.technic == 1 ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_technic">
                      <option value="true">Да</option>
                      <option value="false">Нет</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_technic">
                      <option value="false">Нет</option>
                      <option value="true">Да</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">EVRO-ремонт</div>
                {house.evro_repair == 1 ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_evro_repair">
                      <option value="true">Да</option>
                      <option value="false">Нет</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_evro_repair">
                      <option value="false">Нет</option>
                      <option value="true">Да</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">Можно с животными</div>
                {house.animals == 1 ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_animals">
                      <option value="true">Да</option>
                      <option value="false">Нет</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_animals">
                      <option value="false">Нет</option>
                      <option value="true">Да</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">Есть лифт</div>
                {house.elevator == 1 ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_elevator">
                      <option value="true">Да</option>
                      <option value="false">Нет</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_elevator">
                      <option value="false">Нет</option>
                      <option value="true">Да</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">Стены</div>
                {house.walls == "Краска" ? (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_walls">
                      <option value="Краска">Краска</option>
                      <option value="Обои">Обои</option>
                    </select>
                  </div>
                ) : (
                  <div className="specifications_rigth">
                    <select className="fontsize22" id="select_walls">
                      <option value="Обои">Обои</option>
                      <option value="Краска">Краска</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="specifications">
                <div className="specifications_left">Описание</div>
                <div className="specifications_rigth">
                  <textarea
                    id="newText"
                    className="textarea_create fontsize22"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <button className="new_btn" onClick={changeInfoAboutApp}>
                Изменить!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { House };
