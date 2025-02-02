import React from "react";  // Importa a biblioteca React para criar componentes
import "./Sidebar.css"; // Importa o arquivo de estilos CSS para a sidebar
import logo from "../assets/icons/logo-spotify.png"; // Importa o logo do Spotify

const Sidebar = () => { 
    return( 
        <div className="sidebar"> {/* A barra lateral começa aqui */}
        
            {/* Navegação da Sidebar */}
            <nav className="sidebar__navigation">
                <div className="logo"> {/* Div que envolve a logo */}
                    <a href=""> {/* Link para o logo */}
                        <img src={logo} alt="Logo" /> {/* Imagem do logo */}
                    </a>
                </div>

                {/* Lista de links de navegação */}
                <ul>
                    
                    <li>
                        <a href=""> {/* Link para o início */}
                            <span className="fa fa-home"></span> {/* Ícone do home */}
                            <span>Início</span> {/* Texto do link */}
                        </a>
                    </li>
                    <li>
                        <a href=""> {/* Link para buscar */}
                            <span className="fa fa-search"></span> {/* Ícone de pesquisa */}
                            <span>Buscar</span> {/* Texto do link */}
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Seção de biblioteca */}
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span> {/* Ícone de biblioteca */}
                        <span>Sua biblioteca</span> {/* Texto do botão */}
                    </button>
                    <span className="fa fa-plus"></span> {/* Ícone de adição */}
                </div>

                {/* Seção para criar a primeira playlist */}
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span> {/* Título */}
                        <span className="text subtitle">É fácil, vamos te ajudar.</span> {/* Subtítulo */}
                        <button className="section-playlist__button">
                            <span>Criar playlist</span> {/* Texto do botão */}
                        </button>
                    </div>
                </section>

                {/* Link de Cookies */}
                <div className="cookies">
                    <a href="">Cookies</a> {/* Link de Cookies */}
                </div>

                {/* Botão para selecionar o idioma */}
                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span> {/* Ícone de globo */}
                        <span>Português do Brasil</span> {/* Texto do idioma */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;  // Exporta o componente Sidebar
