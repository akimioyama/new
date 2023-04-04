import React, { useState } from "react";
import { useEffect } from "react";
import PostService from "../API/PostService";
import { MyDropList } from "./UI/MyDropList/MyDropList";

const Filter = ({onChange}) => {
  const [filter, setFilter] = useState(false);
  const [city, setCity] = useState("Владимир");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState("");
  const [furniture, setFurniture] = useState();
  const [technic, setTechnic] = useState();
  const [evro_repair, setEvro_repair] = useState();
  const [animals, setAnimals] = useState();
  const [elevator, setElevator] = useState();
  const [balcony, setBalcony] = useState();
  const [loggia, setLoggia] = useState();
  const [walls, setWalls] = useState();
  const [floor, setFloor] = useState("");
  const [floors, setFloors] = useState("");
  const [new_building, setNew_building] = useState();
  const [type_of_house, setType_of_house] = useState([]);
  const [bathroom_shower, setBathroom_shower] = useState("");
  const [kitchen_stove, setKitchen_stove] = useState("");
  const [ceiling_height, setCeiling_height] = useState("");
  const [lavatory, setLavatory] = useState("");

  const [streetAll, setStreetAll] = useState([]);

  const findOnFilter = () => {
    //район
    let district1 = document.getElementById("select_district");
    let district11
    if (district1.value == ""){
      district11 = null
    }
    else{
      district11 = district1.value
    }
    //улица
    let street1 = null;
    if (street != "") {
      street1 = street;
    }
    //комнаты
    const roomsDiv = document.querySelector(".rooms");
    const checkedInputs = roomsDiv.querySelectorAll(".check:checked");
    let rooms = [];
    checkedInputs.forEach((input) => {
      rooms.push(input.name);
    });
    if (rooms.length == 0){
      rooms = null
    }
    //цена
    let prcie1
    const inputMin = document.querySelector(".inputPrice");
    if (inputMin.value == "") {
      prcie1 = null
    }
    else{
      prcie1 = inputMin.value
    }
    //другое
    const otherDiv = document.querySelector(".other");
    const elements = otherDiv.querySelectorAll(".other_span-red");

    let furniture1 = null
    let technic1 = null
    let evro_repair1 = null
    let animals1 = null
    let elevator1 = null
    let balcony1 = null
    let loggia1 = null

    elements.forEach((element) => {
      if (element.id == "furniture"){
        furniture1 = true
      }
      else if (element.id == "technic"){
        technic1 = true
      }
      else if (element.id == "evro_repair"){
        evro_repair1 = true
      }
      else if (element.id == "animals"){
        animals1 = true
      }
      else if (element.id == "elevator"){
        elevator1 = true
      }
      else if (element.id == "balcony"){
        balcony1 = true
      }
      else if (element.id == "loggia"){
        loggia1 = true
      }
    });
    //стены
    let paint = document.getElementById("select_paint");
    let paint1
    if(paint.value == ""){
      paint1 = null
    }
    else {
      paint1 = paint.value
    }
    //этаж
    let floor1 = document.getElementById("floor")
    let floors1 = document.getElementById("floors")
    let floor11
    let floors11
    if (floor1.value == ""){
      floor11 = null
    }
    else{
      floor11 = floor1.value
    }
    if (floors1.value == ""){
      floors11 = null
    }
    else{
      floors11 = floors1.value
    }
    //новостройка
    let new_building1 = document.getElementById("select_new_building")
    let new_building11
    if (new_building1.value == ""){
      new_building11 = null
    }
    else {
      new_building11 = new_building1.value
    }
    if (new_building11 == "Да"){
      new_building11 = true
    }
    else if(new_building11 == "Нет"){
      new_building11 = false
    }
    //тип дома
    const typeOfHouseDiv = document.querySelector('.type_of_house');
    const checkboxes = typeOfHouseDiv.querySelectorAll('.check:checked');
    let typeOfHouse = []
    checkboxes.forEach(checkbox => {
      typeOfHouse.push(checkbox.name)
    })
    if (typeOfHouse.length == 0) {
      typeOfHouse = null
    }
    //ванная
    let bathroom_shower1 = document.getElementById("select_bathroom_shower")
    let bathroom_shower11
    if (bathroom_shower1.value == ""){
      bathroom_shower11 = null
    }
    else {
      bathroom_shower11 = bathroom_shower1.value
    }
    //кухня
    let kitchen_stove1 = document.getElementById("select_kitchen_stove")
    let kitchen_stove11
    if (kitchen_stove1.value == ""){
      kitchen_stove11 = null
    }
    else {
      kitchen_stove11 = kitchen_stove1.value
    }
    //высота потолков
    let ceiling_height1 = document.getElementById("select_ceiling_height")
    let ceiling_height11 
    if(ceiling_height1.value == ""){
      ceiling_height11 = null
    }
    else {
      ceiling_height11 = ceiling_height1.value
    }
    //санузел 
    let lavatory1 = document.getElementById("select_lavatory")
    let lavatory11
    if (lavatory1.value == ""){
      lavatory11 = null
    }
    else {
      lavatory11 = lavatory1.value
    }


    let conf = {
      city: city,
      district: district11,
      street: street1,
      apart: rooms,
      price: prcie1,
      furniture: furniture1,
      technic: technic1,
      evro_repair: evro_repair1,
      animals: animals1,
      elevator: elevator1,
      balcony: balcony1,
      loggia: loggia1,
      walls: paint1,
      floor: floor11,
      floors: floors11,
      new_building: new_building11,
      type_of_house: typeOfHouse,
      bathroom_shower: bathroom_shower11,
      kitchen_stove: kitchen_stove11,
      ceiling_height: ceiling_height11,
      lavatory: lavatory11
    }
    PostService.filter = conf
    console.log(PostService.filter)
    onChange()
  };
  const clear = () => {
    document.getElementById("select_district").selectedIndex = 0;
    document.getElementById("select_streer").selectedIndex = 0;
    const roomsDiv = document.querySelector(".rooms");
    const checkedInputs = roomsDiv.querySelectorAll(".check:checked");
    checkedInputs.forEach((input) => {
      input.checked = false
    });
    document.getElementById("inputPrice").value = ""
    const otherDiv = document.querySelector(".other");
    const elements = otherDiv.querySelectorAll(".other_span-red");
    elements.forEach((element) => {
      element.className = ""
      element.className = "other_span"
    });
    document.getElementById("select_paint").selectedIndex = 0;
    document.getElementById("floor").value = ""
    document.getElementById("floors").value = ""
    document.getElementById("select_new_building").selectedIndex = 0;
    const typeOfHouseDiv = document.querySelector('.type_of_house');
    const checkboxes = typeOfHouseDiv.querySelectorAll('.check:checked');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false
    })
    document.getElementById("select_bathroom_shower").selectedIndex = 0;
    document.getElementById("select_kitchen_stove").selectedIndex = 0;
    document.getElementById("select_ceiling_height").selectedIndex = 0;
    document.getElementById("select_lavatory").selectedIndex = 0;


    

    PostService.filter = null
    onChange()
  }

  async function restApi() {
    const response = await PostService.getAllStreet();
    setStreetAll(response.data);
  }
  const changeStreet = (temp) => {
    setStreet(temp);
  };
  useEffect(() => {
    restApi();
  }, []);

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
          <select id="select_district">
            <option value=""></option>
            <option value="Ленинский">Ленинский район</option>
            <option value="Октябрьский">Октяборьский район</option>
            <option value="Фрунзенский">Фрунзеский район</option>
          </select>
        </div>
        <div className="street">
          <label>Улица: </label>
          <MyDropList
            defaultValue=""
            data={streetAll}
            onChange={changeStreet}
          />
        </div>
        <div className="rooms">
          <label>Комнаты: </label>
          <input className="check" type="checkbox" name="1" id="1" />1
          <input className="check" type="checkbox" name="2" id="2" />2
          <input className="check" type="checkbox" name="3" id="3" />3
          <input className="check" type="checkbox" name="4" id="4" />4
          <br />
          <input className="check" type="checkbox" name="Дом" id="House" />
          Дом
          <input className="check" type="checkbox" name="Студия" id="Studio" />
          Студия
        </div>
        <div className="price">
          <label>Стоимость до: </label>
          <span>
            <input id="inputPrice" className="inputPrice input-min" type="numbers" /> рублей
          </span>
        </div>
        <br />
        <div className="other">
          <label>Также: </label>
          <span className="other_span" id="furniture">
            с мебелью
          </span>
          <span className="other_span" id="technic">
            с техникой
          </span>
          <span className="other_span" id="evro_repair">
            EVRO ремонт
          </span>
          <span className="other_span" id="animals">
            можно с животными
          </span>
          <span className="other_span" id="elevator">
            есть лифт
          </span>
          <span className="other_span" id="balcony">
            есть балкон
          </span>
          <span className="other_span" id="loggia">
            есть лоджия
          </span>
        </div>
        <div className="paint">
          <label>Стены: </label>
          <select id="select_paint">
            <option value=""></option>
            <option value="Обои">Обои</option>
            <option value="Краска">Краска</option>
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
          <select id="select_new_building">
            <option value=""></option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
        </div>
        <div className="type_of_house">
          <label>Тип дома: </label>
          <div className="type_of_house_1">
            <div>
              <input className="check" type="checkbox" name="Кирпичный" />
              Кирпичный
            </div>
            <div>
              <input className="check" type="checkbox" name="Панельный" />
              Панельный
            </div>
            <div>
              <input className="check" type="checkbox" name="Блочный" />
              Блочный
            </div>
            <div>
              <input className="check" type="checkbox" name="Монолитный" />
              Монолитный
            </div>
            <div>
              <input
                className="check"
                type="checkbox"
                name="Деревянный"
              />
              Деревянный
            </div>
          </div>
        </div>
        <div className="new_building">
          <label>Ванная или душ: </label>
          <select id="select_bathroom_shower">
            <option value=""></option>
            <option value="Ванная">Ванная</option>
            <option value="Душ">Душ</option>
          </select>
        </div>
        <div className="new_building">
          <label>Плита: </label>
          <select id="select_kitchen_stove">
            <option value=""></option>
            <option value="Электрическая">Электрическая</option>
            <option value="Газовая">Газовая</option>
          </select>
        </div>
        <div className="new_building">
          <label>Высота потолков: </label>
          <select id="select_ceiling_height">
            <option value=""></option>
            <option value="2,5">от 2,5 м</option>
            <option value="2,7">от 2,7 м</option>
            <option value="3">от 3 м</option>
            <option value="3,5">от 3,5 м</option>
          </select>
        </div>
        <div className="new_building">
          <label>Санузел: </label>
          <select id="select_lavatory">
            <option value=""></option>
            <option value="Разделённый">Разделённый</option>
            <option value="Совмещённый">Совмещённый</option>
          </select>
        </div>
        <br />
        <div className="btn">
          <button className="btnbtn" onClick={findOnFilter}>
            Найти
          </button>
          <button className="btnmini" onClick={clear}>Сбросить</button>
        </div>
      </div>
    </div>
  );
};

export { Filter };
