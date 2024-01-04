import React, { useState } from 'react';

export const CardView = ({items ,handlerDelete}) => {

  const onDeleteProduct=(id)=>{
    //console.log('Eliminado Producto');
    handlerDelete(id);
  }

  return (
    <>
      <h3>Carro de Compras</h3>
      <div className="my-4 w-50">
        <table className='table table-hover table-striped'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>

            {
              items.map( (item)=>(
                <tr key={item.product.id}>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.product.price}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={()=>onDeleteProduct(item.product.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className='text-end fw-bold'>Total</td>
              <td colSpan="2" className='text-start fw-bold'>$12302</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
