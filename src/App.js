import './App.css';
import Header from './components/Header/Header';
import ShoppingItem from './components/ShoppingItem/ShoppingItem';
import { useState, useEffect } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await fetch('https://pokeapi.co/api/v2/item/');
      const data = await response.json();
      setItems(data.results);
      console.log(data.results);
    }
    loadItems();
  }, []);

  return (
    <>
      <Header />
      <section className="item-section">
        {items.map((item) => (
          <ShoppingItem key={item.name} name={item.name} url={item.url} />
        ))}
      </section>
    </>
  );
}
