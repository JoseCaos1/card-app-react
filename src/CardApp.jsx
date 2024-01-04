import {Navigate, Route, Routes} from 'react-router-dom';
import {CardView} from './components/CardView';
import {CatalogView} from './components/CatalogView';
import {Navbar} from './components/Navbar';
import {useItemCart} from './hooks/useItemsCart';

const CardApp=()=>{

  const { cardItems, handlerAddProductCart, handlerDeleteProductCard } =useItemCart();

  return(
    <>
      <Navbar/>
      <div className="container my-4">
        <h3>Card Ap</h3>
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
      </div>
    </>

  );
}
export default CardApp;
//INICIAREMOS CON EL USEREDUCE
