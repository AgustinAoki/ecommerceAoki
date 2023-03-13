import { useState, useEffect } from 'react';
import './Item.css';
import { Link, NavLink } from 'react-router-dom';

export default function Item({ product }) {
  return (
    <div className='col-5 card'>
      <div>
        <img src={product.img} className='img-fluid' alt='...' />
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <NavLink to={`product/${product.id}`}>
          <button className='btn btn-danger'>Atrapalo ya!</button>
        </NavLink>
      </div>
    </div>
  );
}
