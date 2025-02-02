import React, { useState, useEffect } from "react";
import "./main-content.css";
import smallLeft from "../assets/icons/small-left.png";
import smallRight from "../assets/icons/small-right.png";
import searchIcon from "../assets/icons/search.png";

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
  const [artists, setArtists] = useState([]); // Estado para armazenar os artistas encontrados
  const [showPlaylists, setShowPlaylists] = useState(true); // Controla se mostra playlists ou artistas

  // Função para buscar artistas
  const fetchArtists = async (term) => {
    if (term.trim() === "") {
      setArtists([]); // Se o campo de pesquisa estiver vazio, limpa os artistas
      return;
    }

    try {
      const response = await fetch(`http://localhost:3017/artists?name_like=${term.toLowerCase()}`);
      const data = await response.json();
      const filteredArtists = data.filter((artist) =>
        artist.name.toLowerCase().includes(term.toLowerCase())
      );
      setArtists(filteredArtists); // Atualiza o estado com os artistas filtrados
    } catch (error) {
      console.error("Erro ao buscar artistas:", error);
    }
  };

  // Effect para monitorar o termo de pesquisa
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setShowPlaylists(true); // Exibe as playlists se não houver termo de pesquisa
      setArtists([]); // Limpa os artistas
    } else {
      setShowPlaylists(false); // Exibe os artistas quando houver termo de pesquisa
      fetchArtists(searchTerm); // Realiza a busca
    }
  }, [searchTerm]);

  // Função para atualizar o termo de pesquisa
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Atualiza o estado com o valor digitado
  };

  return (
    <div className="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta para esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta para direita" />
          </button>
        </div>
        <div className="header__search">
          <img src={searchIcon} alt="Ícone de busca" />
          <input
            id="search-input"
            type="text"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={handleInputChange} // Atualiza o termo de pesquisa
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>

      <div className="playlist-container">
        {showPlaylists ? (
          <div id="result-playlists">
            {/* Exibe as playlists quando o termo de pesquisa está vazio */}
            <div className="playlist">
              <h1 id="greeting">Boas-vindas</h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  {/* Exibe as playlists */}
                  {["Boas festas", "Feitos para você", "Lançamentos", "Creators", "Para treinar", "Podcasts", "Sertanejo", "Samba e pagode", "Funk", "MPB", "Rock", "Hip Hop", "Indie", "Relax", "Música Latina"].map((playlist, index) => (
                    <a href="#" key={index} className="cards">
                      <div className={`cards card${index + 1}`}>
                        <img src={`./src/assets/playlist/${index + 1}.jpeg`} alt="" />
                        <span>{playlist}</span>
                      </div>
                    </a>
                  ))}
                </section>
              </div>
            </div>
          </div>
        ) : (
          <div id="result-artist">
            {/* Exibe os artistas encontrados */}
            <div className="grid-container">
              {artists.length > 0 ? (
                artists.map((artist) => (
                  <div className="artist-card" key={artist.id}>
                    <div className="card-img">
                      <img id="artist-img" className="artist-img" src={artist.urlImg} alt={artist.name} />
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                    </div>
                    <div className="card-text">
                      <a title={artist.name} className="vst" href="#">
                        {artist.name}
                      </a>
                      <span className="artist-categorie">Artista</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="not-found">Nenhum artista encontrado</p> // Caso não encontre nenhum artista
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
