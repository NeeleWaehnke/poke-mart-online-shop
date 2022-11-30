import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadItems() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    loadItems();
  }, [url]);
  return data;
}
// useEffect(() => {
//   async function loadItems() {
//     const response = await fetch('https://pokeapi.co/api/v2/item?limit=60');
//     const data = await response.json();
//     setItems(data.results);
//     //console.log(data.results);
//   }
//   loadItems();
// }, []);

// const [infos, setInfos] = useState({});
// console.log(infos);
// useEffect(() => {
//   async function loadInfos() {
//     const response = await fetch(url);
//     const data = await response.json();

//     setInfos({
//       img: data.sprites.default,
//       name: data.name,
//       cost: data.cost,
//       url: url,
//     });
//   }
//   loadInfos();
// }, [url]);
