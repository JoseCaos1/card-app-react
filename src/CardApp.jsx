import React,{useState} from 'react';

const CardApp=()=>{
  return(
    <>
      <div className="container">
        <h3>Card Ap</h3>
        <div className="row">
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Teclado Mecanico RGB</div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$1000</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Samsung Smart Tv 55</div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$3000</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Audifono Blutook </div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$770</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Memoria Corsair </div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$3000</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Asus Envidia RTX</div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$5000</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
          {/* Producto */}
          <div className="col-4 my-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">CPU Intel Core i5</div>
                <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                <p className='card-text'>$4000</p>
                <button className='btn btn-primary'>Agregar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla*/}
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
              <tr>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Cantidad</td>
                <td>Total</td>
                <td>Eliminar</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className='text-end fw-bold'>Total</td>
                <td colSpan="2" className='text-start fw-bold'>$12302</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>

  );
}
export default CardApp;
