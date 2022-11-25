import "./list.css";
import React from "react";

const List = ({ filterType, filterAll }) => {
  return (
    <div className="divList">
      <h2 className="textBalance">Resumo financeiro</h2>
      <div className="divBtnList">
        <button className="btnFilter" onClick={() => filterAll()}>
          Todos
        </button>
        <button className="btnFilter" onClick={() => filterType("entrada")}>
          Entradas
        </button>
        <button className="btnFilter" onClick={() => filterType("saída")}>
          Despesas
        </button>
      </div>
    </div>
  );
};

export default List;
