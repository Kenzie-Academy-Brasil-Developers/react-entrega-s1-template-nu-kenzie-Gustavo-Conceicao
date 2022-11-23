import "./list.css";
import React from "react";

const List = ({ filterEntry, filterAll, filterOut }) => {

  return (
    <div className="divList">
      <h2 className="textBalance">Resumo financeiro</h2>
      <div className="divBtnList">
        <button
          className="btnFilter"
          onClick={filterAll}
        >
          Todos
        </button>
        <button
          className="btnFilter"
          onClick={filterEntry}
        >
          Entradas
        </button>
        <button
          className="btnFilter"
          onClick={filterOut}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default List;
