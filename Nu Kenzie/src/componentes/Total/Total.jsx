import "./total.css"

const Total = ({listTransactions}) => {
    // TODO: adicionar o reducer
    return (
        <div className="divTotal">
            <div className="divContainer">
                <div className="divTotalValue">
                    <p>Valor Total: </p>
                    <span>O valor se refere ao saldo</span>
                </div>
                <span>0</span>
                {/* {listTransactions.reduce((valueTotal, valueAtual) => valueTotal + valueAtual,0)} */}
            </div>
        </div>
    )
}

export default Total;