import { useState, useEffect } from 'react';
import Products from '../../mocks/Products';
import Item from '../Item';
import './ItemListContainer.css';

export default function ItemListContainer({ isFilteringByType, type }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 100)
    );

    productsPromise
      .then((response) => {
        if (isFilteringByType) {
          const productsFiltered = response.filter(
            (product) => product.type === type
          );
          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <div className='container text-center'>
      <div className='row'>
        {products.map((product, index) => (
          <Item product={product} key={product.id}></Item>
        ))}
      </div>
    </div>
  );
}
