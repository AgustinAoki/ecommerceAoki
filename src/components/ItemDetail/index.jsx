import { useState, useEffect } from 'react';
import './ItemDetail.css';
import { Link, NavLink } from 'react-router-dom';
export default function ItemDetail({ product }) {
  return (
    <div>
      <div className='row'>
        <h2 className='col-12'>{product.name}</h2>
      </div>
      <div className='row items'>
        <div className='col-6'>
          <img src={product.imgDetail}></img>
        </div>
        <div className='col-6'>
          <figure class='text-end'>
            <blockquote class='blockquote'>
              <p>{product.detail}</p>
            </blockquote>
            <figcaption class='blockquote-footer'>
              Número en la pokedex: {product.id}{' '}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
