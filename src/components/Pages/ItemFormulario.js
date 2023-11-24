function ItemFormulario(props){
    return(
        <div>
            <label for={props.name}>{props.label}:</label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph}/>
            
        </div>
    )
}

export default ItemFormulario;