// import './Header.css';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Poké-Mart</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #67777e;
  height: 100%;
  border: 1px solid #67777e;
  h1 {
    text-align: center;
    font-family: 'PokemonSolid';
    color: yellow;

    text-shadow: -1px 0 #3888f0, 0 1.5px #3888f0, 1.5px 0 #3888f0,
      0 -1px #3888f0;
  }
`;
