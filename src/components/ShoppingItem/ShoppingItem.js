import './ShoppingItem.css';

export default function ShoppingItem({ name }) {
  return (
    <>
      <li key={name}>{name}</li>
    </>
  );
}
