import Products from '../../mocks/Products';

export default function ItemListContainer({
  addValueToWidget,
  substractValueToWidget,
}) {
  const productList = Products;
  return (
    <div>
      <ul>
        {Products.map((product, index) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
