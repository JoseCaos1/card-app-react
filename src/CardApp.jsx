import React,{useEffect, useReducer, useState} from 'react';
import {CardView} from './components/CardView';
import {CatalogView} from './components/CatalogView';
import {products} from './data/productos';
import {itemsReducer} from './reduce/itemsReducer';
import { getProducts } from './service/productosService';

//SOLO PARA GUIARNOS DE LA ESTRUCTURA INICIAL, LUEGO AL FINAL SE AGREGA
//EL SESSION STORA
//const initialCardItems =[
//  {
//    product:{
//      id: 1,
//      name: 'Teclado Mecanico RGB',
//      description: 'Teclado Mecánico con luces RGB switches cherry red',
//      price: 1000
//    },
//    quantity: 0,
//  }
//]

//si contiene algo de la session o sino un arreglo vacio
const initialCardItems =JSON.parse(sessionStorage.getItem('cart')) || [];

{/*TODO INICIA MI CARDAPP*/}
const CardApp=()=>{

  const [cardItems, dispatch] =useReducer(itemsReducer, initialCardItems);

  const handlerAddProductCart = (product) =>{

    //Para ver si ya existe un id igual en el arreglo
    const hasItem = cardItems.find((i)=>i.product.id ===product.id);

    if(hasItem)
      dispatch(
        {
          type: 'UpdateQuantityProductCart',
          payload :product,
        }
      )
    else{

      dispatch(
        {
          type: 'AddProductCart',
          payload : product
        }
      )

      setCardItems([
        ...cardItems,
        {
          product,
          quantity: 1,
        }
      ]);
    }
  }

  const handlerDeleteProductCard = (id) =>{
    dispatch(
      {
        type: 'DeleteProductCart',
        payload: id,
      }
    )
  }

  return(
    <>
      <div className="container my-4">
        <h3>Card Ap</h3>

        {/* Producto */}
        <CatalogView handler={ handlerAddProductCart }  />

        {/* Tabla*/}
        {
          //Si es distinto q null y el largo es mayor q 0
          cardItems?.length <= 0 ||
            (
            <CardView
              items={cardItems}
              handlerDelete={handlerDeleteProductCard} />
            )
        }
      </div>
    </>

  );
}
export default CardApp;
//INICIAREMOS CON EL USEREDUCE
