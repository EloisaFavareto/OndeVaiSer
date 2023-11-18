//importar o react
import React from "react";
// importar o estilo
import './Card.css';


// funcao default que constroi os elementos da pagina
function Card() {
    // retorna os elementos visuais do componente(pagina)
    return (
        <div className="cardArea">
            <h1 className="titulo">Onde</h1>
            <a  className="cardContent">
                <div className="cardtexto">
                    <h1>Chácaras e Sítios</h1>
                </div>
            </a>
        </div>
    )
}

export default Card;