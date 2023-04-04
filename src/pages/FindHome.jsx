import React from "react";
import { useState } from "react";
import { Filter } from "../components/Filter";
import { Result } from "../components/Result";

function FindHome() {
  const [filt, setFilt] = useState(0)


  const onChange = () => {
    let temp = filt + 1
    setFilt(temp)
  }
  

  return (
    <div className="main">
      <div className="sub_main">
        <Filter onChange={onChange} />
        <Result info={filt} />
      </div>
    </div>
  );
}

export { FindHome };
