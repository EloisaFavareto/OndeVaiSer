//importar o react
import React from "react";
// importar o estilo
import './Footer.css';
import {FaInstagram} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

// funcao default que constroi os elementos da pagina
function Footer() {
    // retorna os elementos visuais do componente(pagina)
    return(
        <footer className="rodapeArea">
            <div className="sectionRodapeTitulo">
                <h1>Sobre</h1>
                <h1>Nossas redes sociais</h1>
            </div>
            
            <div className="iconArea">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
            </div>

            <div className="sectionRodapeTexto">
                <h3>Fale conosco:</h3>
                <h3>Email: ondevaiser@gmail.com</h3>
                <h3>Telefone: 0800 4242 4242</h3>
            </div>

        </footer>
    )
}

export default Footer;