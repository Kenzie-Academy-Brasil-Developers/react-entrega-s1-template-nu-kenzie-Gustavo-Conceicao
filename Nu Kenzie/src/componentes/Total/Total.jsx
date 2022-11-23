import "./total.css"

const Total = ({listTransactions}) => {
    // TODO: adicionar o reducer
    return (
        <div className="divTotal">
            <div className="divContainer">
                <div className="divTotalValue">
                    <p className="textTotalValue">Valor Total: </p>
                    <span className="textBalance">O valor se refere ao saldo</span>
                </div>
                <span className="spanValue" placeholder="0">R$ 
                {listTransactions.reduce((valueTotal, valueItem) => {
                      if(valueItem.type === "entrada"){
                        return valueTotal + valueItem.value
                      }else{
                        return - valueTotal - valueItem.value
                      }
                },0)}
                </span>
            </div>
        </div>
    )
}

export default Total;