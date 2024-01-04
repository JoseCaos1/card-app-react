import React, { useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {CardView} from '../components/CardView';
import {CatalogView} from '../components/CatalogView';

export const CartRoutes = ({
  handlerAddProductCart,
  cardItems,
  handlerDeleteProductCard
  }) => {
  return (
    <>
      <Routes>
        <Route
          path='catalog'
        element={ <CatalogView handler={ handlerAddProductCart }/> }>
        </Route>
        <Route
          path='cart'
          element={
            (cardItems?.length <= 0) ? (
              <div className='alert alert-warning'>No hay productos en el carrito de compras</div>
            )  :
              ( <CardView
                items={cardItems}
                handlerDelete={handlerDeleteProductCard} />
              )
          }
        >
        </Route>
        <Route path='/' element={ <Navigate to={'/catalog'}/> }></Route>
      </Routes>
    </>
  );
}
