import "./list.css"

const List = () => {
    return (
        <div className="divList">
            <h2 className="">Resumo financeiro</h2>
            <div className="divBtnList">
                <button className="btnFilter">Todos</button>
                <button className="btnFilter">Entradas</button>
                <button className="btnFilter">Despesas</button>
            </div>
        </div>
    )
}

export default List;