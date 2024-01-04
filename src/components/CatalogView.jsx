import React, { useEffect, useState } from 'react';
import {getProducts} from '../service/productosService';
import {ProductCardView} from './ProductCardView';


export const CatalogView = () => {

  const [products, setProducts]= useState([]);


  useEffect(()=>{
     setProducts(getProducts());
  },[])


  return (
    <>
      <div className="row">
        {
          products.map((prod) =>(
            <div className="col-4 my-4" key={prod.id}>
              <ProductCardView
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
              />
            </div>

          ))
        }
      </div>
    </>
  );
}
