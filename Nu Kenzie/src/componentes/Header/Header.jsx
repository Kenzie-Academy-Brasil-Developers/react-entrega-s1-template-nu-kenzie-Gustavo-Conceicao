import "./header.css";
import * as React from "react";

export const Header = ({setUsePages}) => {
  return (
    <header className="headerPage">
      <div className="wrapper">
        <img className="imgHeader" src="/img/Nu Kenzie.png" alt="" />
        <button className="btnHeader" onClick={() => setUsePages(true)}>Início</button>
      </div>
    </header>
  );
};
