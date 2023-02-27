import React from "react";
import { Messaging } from "react-cssfx-loading";
import cls from "./Loader.module.css"

const Loader = () => {
  return (
  <div className={cls.loader}>
    <Messaging color="#94f3cb" width="80px" height="80px"/>
  </div>);
};

export { Loader };
