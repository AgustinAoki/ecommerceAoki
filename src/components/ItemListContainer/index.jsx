export default function ItemListContainer({
  addValueToWidget,
  substractValueToWidget,
}) {
  return (
    <div>
      <div>
        <button onClick={addValueToWidget}>
          <i class='bi bi-cart-check-fill'></i>
        </button>
      </div>
      <div>
        <button onClick={substractValueToWidget}>
          <i class='bi bi-cart-check-fill'></i>
        </button>
      </div>
    </div>
  );
}
