//importar o react
import React from "react";
// importar o estilo
import './Header.css';
import logo from "./../pages/images/logo.png" 

// funcao default que constroi os elementos da pagina
function Header() {
    // retorna os elementos visuais do componente(pagina)
    return(
        <header className="headerArea">

            <nav className="navArea">

              <div className="logoArea">
                <img src={logo}/>
              </div>
            
              <div className="titulo">
                <h1>Onde?</h1>
              </div>  

              <div class="campoArea">
                <label for="">
                  Cidade:<sup>*</sup>
                </label>
                <select class="inputCidade" name="cidade" id="">
                  <option value="0">Selecione uma opção</option>
                  <option value="1">SP - PRESIDENTE PRUDENTE</option>
                  <option value="2">SP - ALVARES MACHADO</option>
                </select>
              </div>

            </nav>

        </header>
    )
}

export default Header;