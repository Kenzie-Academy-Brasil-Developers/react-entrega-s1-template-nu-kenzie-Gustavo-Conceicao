import "./card.css";

const Card = ({ listTransactions, setListTransactions}) => {
  const removeTransaction = (indexToRemove) => {
      const newListTransactions = []
      listTransactions.forEach((element, currentIndex) => {
          if (indexToRemove !== currentIndex)
              newListTransactions.push(element)
      });
      setListTransactions(() => newListTransactions)
  }
  return (
    <ul className="ulList">
      {listTransactions.map((listTransaction, index) => (
        <li key={index} className="liCard">
          <div className="divDescription">
            <p className="textDescription">{listTransaction.description}</p>
            <span className="textType">{listTransaction.type}</span>
          </div>
          <div className="divValue">
            <span className="textValues">{listTransaction.value}</span>
            <img className="iconDelete" src="../../img/trash.png" alt="Botão para deletar"  onClick={() => {removeTransaction(index)}}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
