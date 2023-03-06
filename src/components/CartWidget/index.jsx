import './CartWidget.css';
export default function CartWidget({ updateText }) {
  return (
    <div>
      <i className='bi bi-cart-check-fill'>{updateText}</i>
    </div>
  );
}
