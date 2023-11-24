import ItemServico from "./ItemServico"
function Servicos() {
    return (
        <div>
            <h1>Explore o Cactus </h1>
            <img class="centered-image" src="https://garimpario.com.br/wp-content/uploads/2019/02/brecho.jpg" alt="Sofá"/>
            <ItemServico nome="Personal Shopper VIP" servico="Desfrute da exclusividade de ter um Personal Shopper VIP ao seu lado aqui no Cactus. 
            Você terá acesso exclusivo a novas chegadas, descontos especiais e uma experiência de compra íntima, 
            garantindo que cada peça escolhida seja verdadeiramente única e alinhada ao seu gosto pessoal." preco="150,00" />
            <img class="centered-image" src="https://revistatrip.uol.com.br/dados/tpm/_imgBank/img-28315871-1.JPG" alt="Salão Cactus Brechó"/>
            <ItemServico nome="Evento Privado de Moda Vintage" servico="Transforme o Cactus em um espaço exclusivo para o seu evento privado de moda vintage.
            Reserve nosso brechó para uma noite especial de compras, networking e estilo. Você e seu grupo terão a oportunidade de experimentar peças únicas, 
            com a possibilidade de personalização de looks, enquanto desfrutam de um ambiente descontraído. Nosso serviço personalizado não apenas proporciona uma experiência única,
             mas também cria memórias inesquecíveis para todos os participantes." preco="500,00" />
             <img class="centered-image" src="https://casaefesta.com/wp-content/uploads/2020/11/decoracao-de-brecho-46.jpg" alt="Parede Cactus Brechó"/>
            <ItemServico nome="Assinatura Mensal de Peças Vintage" servico="Faça parte da nossa comunidade com a assinatura mensal de peças vintage.
             Baseado nas suas preferências de estilo, nossa equipe escolherá cuidadosamente peças exclusivas que serão entregues diretamente na sua casa a cada mês. 
             Proporcionando uma surpresa emocionante mensalmente e mantendo-o atualizado com as últimas 
             adições ao Cactus de uma maneira exclusiva e personalizada." preco="50,00" />
        </div>
    )

}
export default Servicos;