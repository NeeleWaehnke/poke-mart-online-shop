import { createGlobalStyle } from 'styled-components';
import PokemonInGame from './assets/fonts/PokemonInGame.ttf';
import PokemonSolid from './assets/fonts/PokemonSolid.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'PokemonSolid';
    src: local('pokemonSolid'), url(${PokemonSolid}) format('truetype');
}

@font-face {
    font-family: 'PokemonInGame';
    src: local('PokemonInGame'), url(${PokemonInGame}) format('truetype');
}
;
* {
    box-sizing: border-box;
  };
  
  #root {
    margin-left: 2.5%;
    margin-right: 2.5%;
  
    width: 95%;
    height: 100%;
    align-content: center;
  };
`;
export default GlobalStyle;
