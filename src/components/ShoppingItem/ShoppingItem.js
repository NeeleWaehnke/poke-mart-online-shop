import './ShoppingItem.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ShoppingItem({ name, url, onAddItem, isAddable }) {
  const [infos, setInfos] = useState({
    img: '',
    name: '',
    cost: 100,
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
      <StyledDiv key={name} id={infos.id} className="item">
        <p>{name}</p>
        <p>{infos.cost} ¥</p>
        <img src={infos.img} width="50px" height="50px" alt="item" />
        {isAddable ? (
          <button type="button" onClick={() => onAddItem(infos)}>
            <p>Add Item</p>
          </button>
        ) : (
          <button type="button">
            <p>Remove Item</p>
          </button>
        )}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  p {
    font-family: 'PokemonInGame';
  }
`;
