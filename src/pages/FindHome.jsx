import React from "react";
import { Filter } from "../components/Filter";
import { Result } from "../components/Result";

function FindHome() {
  return (
    <div className="main">
      <div className="sub_main">
        <Filter />
        <Result />
      </div>
    </div>
  );
}

export { FindHome };
