import styled from 'styled-components';

export default function Cart({ children }) {
  return (
    <>
      <StyledHeadline>Cart:</StyledHeadline>
      <StyledCart>
        <>{children}</>
      </StyledCart>
    </>
  );
}

const StyledCart = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  row-gap: 2em;
  margin-bottom: 5em;
  margin-top: 2em;
`;

const StyledHeadline = styled.h3`
  font-family: 'PokemonInGame';
  margin-bottom: 1em;
  margin-left: 20px;
  margin-right: 20px;
`;
