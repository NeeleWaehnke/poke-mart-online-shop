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
`;

export default GlobalStyle;
