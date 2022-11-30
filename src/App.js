import Header from './components/Header/Header';
import ShoppingItem from './components/ShoppingItem/ShoppingItem';
import Cart from './components/Cart/Cart';
import Divider from './components/Divider';
import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import useFetch from './lib/fetch';

export default function App() {
  const [cart, setCart] = useState([]);

  const data = useFetch('https://pokeapi.co/api/v2/item?limit=60');
  if (!data) return null;
  const items = data.results;

  function handleAddItem(item) {
    setCart([...cart, { id: nanoid(), ...item }]);
    console.log(cart);
  }

  function handleRemoveItem(item) {
    setCart(cart.filter((cartItem) => cartItem.name !== item.name));
  }

  return (
    <>
      <Header />
      <Cart>
        {cart.map((cartI) => (
          <ShoppingItem
            key={cartI.id}
            id={cartI.id}
            name={cartI.name}
            url={cartI.url}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </Cart>
      <Divider />
      <StyledHeadline>Shop our Items:</StyledHeadline>
      <StyledSection>
        {items.map((item) => (
          <ShoppingItem
            key={item.name}
            name={item.name}
            url={item.url}
            onAddItem={handleAddItem}
            isAddable
          />
        ))}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  row-gap: 2em;
  margin-left: auto;
`;
const StyledHeadline = styled.h3`
  font-family: 'PokemonInGame';
  margin-bottom: 1em;
  margin-left: 20px;
  margin-right: 20px;
`;
