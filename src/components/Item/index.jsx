import { useState, useEffect } from 'react';
import './Item.css';

export default function Item({ product }) {
  return (
    <div className='col-3 card'>
      <div>
        <img src={product.img} className='img-fluid' alt='...' />
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <button className='btn btn-danger'>Atrapalo ya!</button>
      </div>
    </div>
  );
}
