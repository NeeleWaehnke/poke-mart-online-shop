import './ShoppingItem.css';

export default function ShoppingItem({ name }) {
  return (
    <>
      <div key={name} className="item">
        <p>{name}</p>
      </div>
    </>
  );
}
