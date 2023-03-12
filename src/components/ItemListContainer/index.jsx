import { useState, useEffect } from 'react';
import Products from '../../mocks/Products';
import Item from '../Item';
import './ItemListContainer.css';

export default function ItemListContainer() {
  // const products = new Promise((resolve, reject) => {});

  const [produts, setProducts] = useState([]);
  const productList = Products;

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 100)
    );

    productsPromise
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='item-container'>
      {productList.map((product, index) => (
        <Item product={product}></Item>
      ))}
    </div>
  );
}
