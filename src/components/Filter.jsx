import React from "react";

const Filter = () => {
  return (
    <div className="left_main">
      <div className="left_main_header">
        <h1 className="h1main">Фильтр</h1>
      </div>
      <div className="filter">
        <div className="city">
          <label>Город: </label>
          <select>
            <option value="Vladimir">Владимир</option>
          </select>
        </div>

        <div className="district">
          <label>Район: </label>
          <select>
            <option value=""></option>
            <option value="Leninskiy">Ленинский район</option>
            <option value="Vladimir">Октяборьский район</option>
            <option value="Vladimir">Фрунзеский район</option>
          </select>
        </div>

        <div className="street">
          <label>Улица: </label>
          <select>
            <option value=""></option>
            <option value="367">Абаза</option>
            <option value="340">Абакан</option>
            <option value="369">Абдулино</option>
          </select>
        </div>

        <div className="rooms">
          <label>Комнаты: </label>
          <span>
            <input className="check" type="checkbox" name="1" id="1" />1
          </span>
          <span>
            <input className="check" type="checkbox" name="2" id="2" />2
          </span>
          <span>
            <input className="check" type="checkbox" name="3" id="3" />3
          </span>
          <span>
            <input className="check" type="checkbox" name="4" id="4" />4
          </span>
          <br />
          <span>
            <input className="check" type="checkbox" name="House" id="House" />
            Дом
          </span>
          <span>
            <input className="check" type="checkbox" name="House" id="Studio" />
            Студия
          </span>
        </div>

        <div className="price">
          <label>Стоимость до: </label>
          <span>
            <input className="input-min" type="text" /> рублей
          </span>
        </div>
        <br />
        <div className="other">
          <label>Также: </label>
          <span className="other_span">с мебелью</span>
          <span className="other_span">с техникой</span>
          <span className="other_span">EVRO ремонт</span>
          <span className="other_span">можно с животными</span>
          <span className="other_span">есть лифт</span>
          <span className="other_span">есть балкон</span>
          <span className="other_span">есть лоджия</span>
        </div>
        <div className="street">
          <label>Стены: </label>
          <select>
            <option value=""></option>
            <option value="367">Обои</option>
            <option value="340">Краска</option>
          </select>
        </div>
        <div className="floors">
          <label>Этаж: </label>
          <div className="floors_sub">
            от <input type="text" id="floor" /> до{" "}
            <input type="text" id="floors" />
          </div>
        </div>
        <div className="new_building">
          <label>Новостройка: </label>
          <select>
            <option value=""></option>
            <option value="777">Да</option>
            <option value="888">Нет</option>
          </select>
        </div>
        <div className="type_of_house">
          <label>Тип дома: </label>
          <div className="type_of_house_1">
            <div>
              <input className="check" type="checkbox" name="1" id="1" />
              Кирпичный
            </div>
            <div>
              <input className="check" type="checkbox" name="2" id="2" />
              Панельный
            </div>
            <div>
              <input className="check" type="checkbox" name="3" id="3" />
              Блочный
            </div>
            <div>
              <input className="check" type="checkbox" name="4" id="4" />
              Монолитный
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                name="House"
                id="House"
              />
              Деревянный
            </div>
          </div>
        </div>
        <div className="new_building">
          <label>Ванная или душ: </label>
          <select>
            <option value=""></option>
            <option value="001">Ванная</option>
            <option value="002">Душ</option>
          </select>
        </div>
        <div className="new_building">
          <label>Плита: </label>
          <select>
            <option value=""></option>
            <option value="001">Электрическая</option>
            <option value="002">Газовая</option>
          </select>
        </div>
        <div className="new_building">
          <label>Высота потолков: </label>
          <select>
            <option value=""></option>
            <option value="011">от 2,5 м</option>
            <option value="012">от 2,7 м</option>
            <option value="013">от 3 м</option>
            <option value="014">от 3,5 м</option>
          </select>
        </div>
        <div className="new_building">
          <label>Санузел: </label>
          <select>
            <option value=""></option>
            <option value="001">Разделённый</option>
            <option value="002">Совмещённый</option>
          </select>
        </div>
        <br />
        <div className="btn">
          <button>Найти</button>
        </div>
      </div>
    </div>
  );
};

export { Filter };
