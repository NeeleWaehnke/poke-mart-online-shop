import './App.css';
import Header from './components/Header/Header';
import ShoppingItem from './components/ShoppingItem/ShoppingItem';
import Cart from './components/Cart/Cart';
import { useState, useEffect } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await fetch('https://pokeapi.co/api/v2/item?limit=60');
      const data = await response.json();
      setItems(data.results);
      //console.log(data.results);
    }
    loadItems();
  }, []);

  function handleAddItem(item) {
    setCart([...cart, item]);
    console.log(cart);
  }

  return (
    <>
      <Header />
      <Cart>
        {cart.map((cartI) => (
          <ShoppingItem key={cartI.name} name={cartI.name} url={cartI.url} />
        ))}
      </Cart>

      <section className="item-section">
        {items.map((item) => (
          <ShoppingItem
            key={item.name}
            name={item.name}
            url={item.url}
            onAddItem={handleAddItem}
            isAddable
          />
        ))}
      </section>
    </>
  );
}
