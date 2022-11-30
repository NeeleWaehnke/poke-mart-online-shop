import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ShoppingItem({
  name,
  url,
  onAddItem,
  isAddable,
  onRemoveItem,
}) {
  const [infos, setInfos] = useState({
    img: '',
    name: '',
    cost: '?',
    url: '',
  });
  //console.log(infos);
  useEffect(() => {
    async function loadInfos() {
      const response = await fetch(url);
      const data = await response.json();

      setInfos({
        img: data.sprites.default,
        name: data.name,
        cost: data.cost,
        url: url,
      });
    }
    loadInfos();
  }, [url]);

  return (
    <>
      <StyledDiv key={name} id={infos.id}>
        <StyledText>{name}</StyledText>
        <StyledText>{infos.cost === 0 ? 300 : infos.cost} ¥</StyledText>
        <img src={infos.img} width="80px" height="80px" alt="item" />
        {isAddable ? (
          <StyledButton type="button" onClick={() => onAddItem(infos)}>
            <p>Add Item </p>
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={() => onRemoveItem(infos)}>
            <p>Remove Item</p>
          </StyledButton>
        )}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  border: 1px solid grey;
  height: auto;
  width: auto;
  flex-basis: auto;
  padding: 3em;
  padding-bottom: 1em;
  padding-top: 1.5em;
  text-align: center;
  position: relative;

  img {
    image-rendering: pixelated;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 15%;
  }
`;

const StyledText = styled.p`
  font-family: 'PokemonInGame';
  text-align: center;
  margin-top: 5%;
`;

const StyledButton = styled.button`
  position: relative;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 10%;
  text-align: center;
  justify-content: center;
  p {
    font-family: 'PokemonInGame';
    text-align: center;
  }
`;
