import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import FormPage from "../Form/Form";
import { Header } from "../Header/Header";
import List from "../List/List";
import Total from "../Total/Total";
import "./main.css";

const Main = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return (
    <div className="divBody">
      <Header />
      <div className="divMain">
        <div className="divForm">
          <FormPage setListTransactions={setListTransactions} />
          <Total listTransactions={listTransactions}/>
        </div>
        <div className="divCard">
          <List />
          <Card listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
