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
  width: 100%;
  padding: 5px;
  border: 1px solid #67777e;
  margin-left: 0;
  margin-right: 0;
  h1 {
    text-align: center;
    font-size: 40px;
    font-family: 'PokemonSolid';
    color: yellow;

    text-shadow: -1px 0 #3888f0, 0 1.5px #3888f0, 1.5px 0 #3888f0,
      0 -1px #3888f0;
  }
`;
