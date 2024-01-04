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
//  }
]

const CardApp=()=>{

  const [ cardItems, setCardItems ] = useState(initialCardItems)

  const handlerAddProductCart = (product) =>{

    //Para ver si ya existe un id igual en el arreglo
    const hasItem = cardItems.find((i)=>i.product.id ===product.id);
    //console.log(hasItem);
    if(hasItem){
      //1ER FORMA
      //{/*Filter lo q hace es lo elimina y lo vuelve a crear por eso es q se sea al final*/}
      //setCardItems([
        //...cardItems.filter( (i)=> i.product.id !== product.id ),
        //{
          //product,
          //quantity: hasItem.quantity +1,
        //}
      //])

      //2DA FORMA
      //{/* lo q hace map es lo vuelve a mapear y siempre se debe de volver un return */}
      setCardItems(
        cardItems.map( (i)=>{
          if( i.product.id === product.id){
            i.quantity = i.quantity+1;
          }
          return i;
        } ),
        {
          product,
          quantity: hasItem.quantity +1,
        }
      )
    }else{

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
    setCardItems([
      ...cardItems.filter((i) => i.product.id !== id)
    ])
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
