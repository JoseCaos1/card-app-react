import React, { useState } from 'react';

export const ProductCardView = ({handler, id, name, description, price}) => {

  const onAddProduct=(product)=>{
    console.log(product);
    handler(product);
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
