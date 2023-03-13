import { useState, useEffect } from 'react';
import Products from '../../mocks/Products';
import Item from '../Item';
import ItemDetail from '../ItemDetail';

export default function ItemDetailsContainer({ idProduct }) {
  const [product, setProducts] = useState(1);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 100)
    );
    productsPromise
      .then((response) => {
        const productfiltered = response.find(
          (product) => product.id == idProduct
        );
        console.log(productfiltered);
        setProducts(productfiltered);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='row'>
      <ItemDetail product={product} key={product.id}></ItemDetail>
    </div>
  );
}
