import "./form.css";
import { useState } from "react";

const FormPage = ({ setListTransactions }) => {
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionType, setTransactionType] = useState({ value: "entrada" });
  const [transactionValue, setTransactionValue] = useState();

  const createNewTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      description: transactionDescription,
      type: transactionType.value,
      value: transactionValue,
    };
    setListTransactions((prevListTransactions) => [
      ...prevListTransactions,
      newTransaction,
    ]);
  };

  return (
    <form className="formInput" onSubmit={createNewTransaction}>
      <label className="labelForm" htmlFor="">
        Descrição
      </label>
      <input
        className="inputDescription"
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        value={transactionDescription}
        onChange={(e) => {
          setTransactionDescription(e.target.value);
        }}
      />
      <span className="example">Ex: Compras de roupas</span>
      <div className="divSelect">
        <div className="divInputs">
          <label className="labelForm">Valor</label>
          <input
            className="inputValue"
            type="number"
            name="number"
            id="idNumber"
            placeholder="Valor"
            value={transactionValue}
            onChange={(e) => {
              setTransactionValue(e.target.value);
            }}
          />
        </div>
        <div className="divInputs">
          <label className="labelForm">Tipo de valor</label>
          <select
            className="selectTypeValue"
            id="idSelect"
            value={transactionType.value}
            onChange={(e) => {
              setTransactionType({ value: e.target.value });
            }}
          >
            <option className="optionsSelect" value={"entrada"}>
              Entrada
            </option>
            <option className="optionsSelect" value={"saída"}>
              Saída
            </option>
          </select>
        </div>
      </div>
      <button className="btnForm" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default FormPage;
