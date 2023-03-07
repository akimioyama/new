import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "../../../styles/slider.css"

const MySlider = ({ph}) => {
  const qwe = "https://placehold.co/600x400?text=1";

  const [photo, setPhoto] = useState([
    "https://placehold.co/1000x900?text=1",
    "https://placehold.co/1000x900?text=2",
    "https://placehold.co/1000x900?text=3",
    "https://placehold.co/1000x900?text=4",
  ]);


  return (
    <div className="carusel">
      <AwesomeSlider>
        {ph?.map((q) => (
          <div key={q} className="itc-slider__item">
            <img src={q} />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export { MySlider };
