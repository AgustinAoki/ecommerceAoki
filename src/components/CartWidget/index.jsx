import './CartWidget.css';
export default function CartWidget({ updateText }) {
  return (
    <div>
      <i class='bi bi-cart-check-fill'>{updateText}</i>
    </div>
  );
}
