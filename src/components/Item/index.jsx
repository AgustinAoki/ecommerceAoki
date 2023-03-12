import { useState, useEffect } from 'react';
import './Item.css';

export default function Item({ product }) {
  return (
    <div className='item-config'>
      <div>
        <img className='img-config' src={product.img}></img>
      </div>
      <h4>{product.name}</h4>
      <div>{product.description}</div>
      <div className='btn-primary-conteiner'>
        <button className='btn-primary'>Atrapalo ya!</button>
      </div>
    </div>
  );
}
