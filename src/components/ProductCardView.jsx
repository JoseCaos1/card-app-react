import React, { useState } from 'react';

export const ProductCardView = ({id, name, description, price}) => {

  const onAddProduct=(product)=>{
    console.log(product);
  }

  return (
    <>
      <div className="card" >
        <div className="card-body">
          <div className="card-title">{name}</div>
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
