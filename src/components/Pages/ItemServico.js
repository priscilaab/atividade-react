function ItemServico ({nome, servico, preco}) {
    return (
        <div>
            <h3>{nome}</h3>
            <p>{servico}</p>
            <p>R${preco}</p>
            <hr/>
        </div>
    )
}

export default ItemServico;