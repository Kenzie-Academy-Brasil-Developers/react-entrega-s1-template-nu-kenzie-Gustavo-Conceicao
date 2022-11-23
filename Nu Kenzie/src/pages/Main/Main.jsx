import React from "react";
import { useState } from "react";
import Card from "../../componentes/Card/Card";
import FormPage from "../../componentes/Form/Form";
import { Header } from "../../componentes/Header/Header";
import List from "../../componentes/List/List";
import Total from "../../componentes/Total/Total";
import "./main.css";

const Main = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [filters, setFilter] = useState([]);
  function filterAll () {
    return setFilter([])
  }
  function filterEntry () {
    const entrys = listTransactions.filter((elem) => elem.type === "entrada")
    return setFilter(entrys)
  }
  function filterOut () {
    const out = listTransactions.filter((elem) => elem.type === "saída")
    return setFilter(out)
  }
  return (
    <div className="divBody">
      <Header />
      <main className="divMain">
        <section className="sectionForm">
          <FormPage setListTransactions={setListTransactions} />
          <Total listTransactions={filters.length ? filters : listTransactions}/>
        </section>
        <section className="sectionCard">
          <List filterAll={filterAll} filterEntry={filterEntry} filterOut={filterOut}/>
          <Card listTransactions={filters.length ? filters : listTransactions} setListTransactions={setListTransactions}/>
        </section>
      </main>
    </div>
  );
};

export default Main;
