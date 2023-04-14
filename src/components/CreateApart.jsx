import React from "react";
import PostService from "../API/PostService";
import { useState } from "react";
import { MyDropList } from "./UI/MyDropList/MyDropList";
import { useEffect } from "react";
import axios from "axios";

const CreateApart = ({ id_user, onChange }) => {
  const imgChange = (event) => {};

  async function addApp() {
    let city = document.getElementById("city").value;
    if (city == "") {
      city = null;
    }
    let district = document.getElementById("select_district").value;
    if (district == "") {
      district = null;
    }
    let street = document.getElementById("street").value;
    if (street == "") {
      street = null;
    }
    let house = document.getElementById("house").value;
    if (house == "") {
      house = null;
    }
    let apart = document.getElementById("apart").value;
    if (apart == "") {
      apart = null;
    }
    let price = document.getElementById("price").value;
    if (price == "") {
      price = null;
    }
    const otherDiv = document.querySelector(".other");
    const elements = otherDiv.querySelectorAll(".other_span-red");

    let furniture = false;
    let technic = false;
    let evro_repair = false;
    let animals = false;
    let elevator = false;
    let balcony = false;
    let loggia = false;

    elements.forEach((element) => {
      if (element.id == "furniture") {
        furniture = true;
      } else if (element.id == "technic") {
        technic = true;
      } else if (element.id == "evro_repair") {
        evro_repair = true;
      } else if (element.id == "animals") {
        animals = true;
      } else if (element.id == "elevator") {
        elevator = true;
      } else if (element.id == "balcony") {
        balcony = true;
      } else if (element.id == "loggia") {
        loggia = true;
      }
    });

    let paint = document.getElementById("select_paint").value;
    if (paint == "") {
      paint = null;
    }
    let floor = document.getElementById("floor").value;
    let floors = document.getElementById("floors").value;
    if (floor == "") {
      floor = null;
    }
    if (floors == "") {
      floors = null;
    }
    let new_building = document.getElementById("select_new_building").value;
    if (new_building == "Да") {
      new_building = true;
    }
    else{
      new_building = false
    }
    let type_of_house = document.getElementById("select_type_of_house").value;
    if (type_of_house == "") {
      type_of_house = null;
    }
    let bathroom_shower = document.getElementById(
      "select_bathroom_shower"
    ).value;
    if (bathroom_shower == "") {
      bathroom_shower = null;
    }
    let kitchen_stove = document.getElementById("select_kitchen_stove").value;
    if (kitchen_stove == "") {
      kitchen_stove = null;
    }
    let ceiling_height = document.getElementById("select_ceiling_height").value;
    if (ceiling_height == "") {
      ceiling_height = null;
    }
    let lavatory = document.getElementById("select_lavatory").value;
    if (lavatory == "") {
      lavatory = null;
    }
    let text = document.getElementById("text").value;
    if (text == "") {
      text = null;
    }
    let count_pic = String(document.getElementById("inputImgFile").files.length)

    let conf = {
      id: 0,
      city: city,
      street: street,
      house: house,
      apart: apart,
      price: price,
      furniture: furniture,
      technic: technic,
      evro_repair: evro_repair,
      animals: animals,
      elevator: elevator,
      loggia: loggia,
      balcony: balcony,
      walls: paint,
      floor: floor,
      floors: floors,
      new_building: new_building,
      type_of_house: type_of_house,
      bathroom_shower: bathroom_shower,
      kitchen_stove: kitchen_stove,
      ceiling_height: ceiling_height,
      lavatory: lavatory,
      id_arendatel: id_user,
      district: district,
      for_rent: true,
      count_pic: count_pic,
      text: text,
    };
    console.log(conf);
    const response = await PostService.createApp(conf);
    console.log(response.data);
    let id_apart = response.data;
    if (id_apart != "-1") {
      let inputt = document.getElementById("inputImgFile").files;
      const formData = new FormData();
      for (let i = 0; i < inputt.length; i++) {
        formData.append("files", inputt[i]);
      }

      fetch("https://localhost:44330/api/Image/" + id_apart, {
        method: "POST",
        body: formData,
      })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
        onChange()
    }
    
  }

  return (
    <div className="createApart">
      <div className="createApart_item">
        <label>Добавтье фотографии: </label>
        <input
          type="file"
          name="myImg"
          multiple
          className="inputFile"
          accept="image/png, image/jpg, image/jpeg"
          id="inputImgFile"
          onChange={imgChange}
        />
      </div>
      <div className="createApart_item">
        <label>Город: </label>
        <select id="city" className="selectCreate">
          <option value="Владимир">Владимир</option>
        </select>
      </div>
      <div className="createApart_item">
        <label>Район: </label>
        <select id="select_district" className="selectCreate">
          <option value=""></option>
          <option value="Ленинский">Ленинский район</option>
          <option value="Октябрьский">Октяборьский район</option>
          <option value="Фрунзенский">Фрунзеский район</option>
        </select>
      </div>
      <div className="createApart_item">
        <label>Улица: </label>
        <input id="street" className="inputCreate" type="text" />
      </div>
      <div className="createApart_item">
        <label>Номер дома: </label>
        <input id="house" className="inputCreate inputCreate-min" type="text" />
      </div>
      <div className="createApart_item">
        <label>Количество комнат: </label>
        <input id="apart" className="inputCreate inputCreate-min" type="text" />
      </div>
      <div className="createApart_item">
        <label>Стоимость в месяц: </label>
        <input
          id="price"
          className="inputCreate inputCreate-mid"
          type="text"
        />{" "}
        рублей
      </div>
      <div className="createApart_item other">
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
        (Нажмите)
      </div>
      <div className="createApart_body">
        <div className="createApart_body_left">
          <div className="createApart_item">
            <label>Стены: </label>
            <select className="selectCreate" id="select_paint">
              <option value=""></option>
              <option value="Обои">Обои</option>
              <option value="Краска">Краска</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Этаж: </label>
            <input
              id="floor"
              className="inputCreate inputCreate-min"
              type="text"
            />{" "}
            из
            <input
              id="floors"
              className="inputCreate inputCreate-min"
              type="text"
            />
          </div>
          <div className="createApart_item">
            <label>Новостройка: </label>
            <select className="selectCreate" id="select_new_building">
              <option value=""></option>
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Тип дома: </label>
            <select className="selectCreate" id="select_type_of_house">
              <option value=""></option>
              <option value="Кирпичный">Кирпичный</option>
              <option value="Панельный">Панельный</option>
              <option value="Блочный">Блочный</option>
              <option value="Монолитный">Монолитный</option>
              <option value="Деревянный">Деревянный</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Ванная или душ: </label>
            <select className="selectCreate" id="select_bathroom_shower">
              <option value=""></option>
              <option value="Ванная">Ванная</option>
              <option value="Душ">Душ</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Плита: </label>
            <select className="selectCreate" id="select_kitchen_stove">
              <option value=""></option>
              <option value="Электрическая">Электрическая</option>
              <option value="Газовая">Газовая</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Высота потолков: </label>
            <select className="selectCreate" id="select_ceiling_height">
              <option value=""></option>
              <option value="2,5">от 2,5 м</option>
              <option value="2,7">от 2,7 м</option>
              <option value="3">от 3 м</option>
              <option value="3,5">от 3,5 м</option>
            </select>
          </div>
          <div className="createApart_item">
            <label>Санузел: </label>
            <select className="selectCreate" id="select_lavatory">
              <option value=""></option>
              <option value="Разделённый">Разделённый</option>
              <option value="Совмещённый">Совмещённый</option>
            </select>
          </div>
        </div>
        <div className="createApart_body_rigth">
          <label>Описание: </label>
          <div>
            <textarea className="textarea_create" id="text"></textarea>
          </div>
        </div>
      </div>
      <button className="new_btn" onClick={addApp}>
        Добавить!
      </button>
    </div>
  );
};

export { CreateApart };
