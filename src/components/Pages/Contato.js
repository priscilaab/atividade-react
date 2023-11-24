import ItemFormulario from "./ItemFormulario";

function Contato(){
    return(
        <div>
<ItemFormulario name="nome" label="Nome" type="text" ph="Digite o seu nome"/>
<ItemFormulario name="email" label="Email" type="email" ph="Digite o seu email"/>
<ItemFormulario name="assunto" label="Assunto" type="text" ph="Motivo do Contato"/>
<ItemFormulario name="mensagem" label="Mensagem" type="text" ph="Digite aqui..."/>
<button>Enviar</button>
        </div>
    )
}
export default Contato;