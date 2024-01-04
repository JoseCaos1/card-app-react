import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const ProductCardView = ({handler, id, name, description, price}) => {

  const navigate= useNavigate();

  const onAddProduct=(product)=>{
    console.log(product);
    handler(product);
    navigate('/cart');
  }

  return (
    <>
      <div className="card" >
        <div className="card-body">
          <p className='card-text'>{name}</p>
          <p className='card-text'>{description}</p>
          <p className='card-text'>${price}</p>
          <button
            className='btn btn-primary'
            onClick={()=> onAddProduct({ id, name, description, price })}
          >Agregar</button>
        </div>
      </div>
    </>
  );
}
