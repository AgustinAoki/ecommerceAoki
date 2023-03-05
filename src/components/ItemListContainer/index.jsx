export default function ItemListContainer() {
  return (
    <div>
      <ItemsContenedor items={'Aca irian los items'} />
    </div>
  );
}

function ItemsContenedor({ items }) {
  return <p> {items}</p>;
}
