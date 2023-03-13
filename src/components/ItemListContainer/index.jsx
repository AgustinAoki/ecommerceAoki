import { useState, useEffect } from 'react';
import Products from '../../mocks/Products';
import Item from '../Item';
import './ItemListContainer.css';

export default function ItemListContainer({ isFilteringByType, type }) {
  // const products = new Promise((resolve, reject) => {});
  const [products, setProducts] = useState([]);
  const productList = Products;

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
          console.log(type);
          console.log(productsFiltered);
          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class='container text-center'>
      <div class='row'>
        {products.map((product, index) => (
          <Item product={product}></Item>
        ))}
      </div>
    </div>
  );
}
