// Importando React e hooks necessários para o componente funcionar
import React, { useState, useEffect } from "react";

const ArtistSearch = () => {
  // Estado para armazenar o valor do input
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para armazenar o resultado da API (supondo que seja um array de artistas)
  const [artists, setArtists] = useState([]);
  // Estado para controlar se a busca foi realizada
  const [hasSearched, setHasSearched] = useState(false);

  // Efeito que dispara a busca sempre que searchTerm mudar
  useEffect(() => {
    // Se o input estiver vazio, reseta os resultados e não chama a API
    if (searchTerm.trim() === "") {
      setArtists([]); // Limpa a lista de artistas
      setHasSearched(false); // Reseta o estado de busca realizada
      return; // Não faz mais nada, retornando aqui
    }

    // Atualiza a flag de busca realizada
    setHasSearched(true);

    // Monta a URL da API (convertendo o termo para minúsculas)
    const url = `http://localhost:3017/artists?name_like=${searchTerm.toLowerCase()}`;

    // Faz a requisição para a API com o termo de busca
    fetch(url)
      .then((response) => response.json()) // Converte a resposta da API para JSON
      .then((result) => {
        // Atualiza o estado com o resultado da API
        setArtists(result); // Armazena os artistas retornados pela API no estado
      })
      .catch((error) => {
        console.error("Erro na requisição:", error); // Caso ocorra um erro na requisição
        setArtists([]); // Limpa a lista de artistas se houver erro
      });
  }, [searchTerm]); // Esse useEffect é executado toda vez que searchTerm mudar

  // Função chamada a cada alteração no input
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Atualiza o termo de pesquisa com o valor digitado
  };

  return (
    <div className="main-container">
      {/* Cabeçalho com a área de busca */}
      <nav className="header__navigation">
        {/* Outros elementos do header podem ser adicionados aqui */}
        <div className="header__search">
          {/* Input de pesquisa onde o usuário digita o termo */}
          <input
            id="search-input"
            type="text"
            maxLength="800" // Limita o tamanho do texto para 800 caracteres
            autoCorrect="off" // Desativa a correção automática
            autoCapitalize="off" // Desativa a capitalização automática
            spellCheck="false" // Desativa a verificação ortográfica
            placeholder="O que você quer ouvir?" // Texto exibido quando o input está vazio
            value={searchTerm} // O valor do input está vinculado ao estado searchTerm
            onChange={handleInputChange} // Chama a função handleInputChange sempre que o usuário digitar algo
          />
        </div>
      </nav>

      {/* Área de conteúdo */}
      <div className="playlist-container">
        {/* Se nenhum termo for digitado ou a busca não foi realizada, exibe o container de playlists */}
        {(!hasSearched || searchTerm.trim() === "") && (
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting">Boas vindas</h1> {/* Título de boas-vindas */}
              <h2 className="session">Navegar por todas as seções</h2> {/* Subtítulo de navegação */}
            </div>
            {/* Aqui você pode inserir os cards de playlists */}
            <p>Conteúdo de playlists...</p> {/* Placeholder para conteúdo de playlists */}
          </div>
        )}

        {/* Se houver resultado (busca realizada) exibe o container de artista */}
        {hasSearched && (
          <div id="result-artist">
            {/* Se a lista de artistas não estiver vazia, exibe os dados */}
            {artists.length > 0 ? (
              artists.map((artist, index) => (
                <div key={index} className="artist-card">
                  <div className="card-img">
                    <img
                      id="artist-img"
                      className="artist-img"
                      src={artist.urlImg} // Imagem do artista
                      alt={artist.name} // Nome do artista para acessibilidade
                    />
                  </div>
                  <div className="card-text">
                    <span id="artist-name">{artist.name}</span> {/* Nome do artista */}
                    <span className="artist-categorie">Artista</span> {/* Categoria do artista */}
                  </div>
                </div>
              ))
            ) : (
              // Caso não haja nenhum resultado
              <p>Nenhum artista encontrado.</p> {/* Mensagem caso nenhum artista seja encontrado */}
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistSearch; // Exporta o componente ArtistSearch para ser usado em outros lugares
