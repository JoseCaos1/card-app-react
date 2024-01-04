import React,{useEffect, useState} from 'react';
import {CardView} from './components/CardView';
import {CatalogView} from './components/CatalogView';
import {products} from './data/productos';
import { getProducts } from './service/productosService';

const initialCardItems =[
//  {
//    product:{
//      id: 1,
//      name: 'Teclado Mecanico RGB',
//      description: 'Teclado Mecánico con luces RGB switches cherry red',
//      price: 1000
//    },
//    quantity: 0,
//    total: 0
//  }
]

const CardApp=()=>{

  const [ cardItems, setCardItems ] = useState(initialCardItems)

  const handlerAddProductCart = (product) =>{
    setCardItems([
      ...cardItems,
      {
        product,
        quantity: 1,
        total: product.price * 1
      }
    ]);
  }

  return(
    <>
      <div className="container">
        <h3>Card Ap</h3>

        {/* Producto */}
        <CatalogView handler={ handlerAddProductCart } />

        {/* Tabla*/}
        <CardView items={cardItems} />
      </div>
    </>

  );
}
export default CardApp;
