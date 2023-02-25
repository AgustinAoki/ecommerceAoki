export default function ItemListContainer() {
  return (
    <div>
      <ItemsContenedor items='[ItemListContainer] Aca imagino que irian la lista de items' />
    </div>
  );
}

function ItemsContenedor({ items }) {
  return <p> {items}</p>;
}
