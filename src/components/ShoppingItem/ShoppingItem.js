import './ShoppingItem.css';
import { useEffect, useState } from 'react';

export default function ShoppingItem({ name, url }) {
  const [infos, setInfos] = useState({ img: '', name: '', cost: '' });
  console.log(infos);
  useEffect(() => {
    async function loadInfos() {
      const response = await fetch(url);
      const data = await response.json();

      setInfos(data);
    }
    loadInfos();
  }, [url]);

  return (
    <>
      <div key={name} className="item">
        <p>{name}</p>
        <p>{infos.cost}</p>
        <img
          src={infos.sprites?.default}
          width="50px"
          height="50px"
          alt="item"
        />
      </div>
    </>
  );
}
