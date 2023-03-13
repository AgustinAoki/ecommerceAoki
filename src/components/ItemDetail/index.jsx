import { useState, useEffect } from 'react';
import './ItemDetail.css';
import { Link, NavLink } from 'react-router-dom';
export default function ItemDetail({ product }) {
  return (
    <div>
      <div className='row'>
        <h1 className='col-12'>{product.name}</h1>
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
              Número de producto: {product.id}{' '}
            </figcaption>
          </figure>
          <h5>Cantidad de stock en criadero: {product.stock} unidades</h5>
          <h3>Precio: {product.price} U$D</h3>
          <button className='btn btn-danger'>Comprar!</button>
        </div>
      </div>
    </div>
  );
}
