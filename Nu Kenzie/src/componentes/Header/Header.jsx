import "./header.css";
import * as React from "react";

export const Header = () => {
  return (
    <header className="headerPage">
      <div className="wrapper">
        <img className="imgHeader" src="/img/Nu Kenzie.png" alt="" />
        <button className="btnHeader">Início</button>
      </div>
    </header>
  );
};
