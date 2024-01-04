import {Navigate, Route, Routes} from 'react-router-dom';
import {CardView} from './components/CardView';
import {CatalogView} from './components/CatalogView';
import {Navbar} from './components/Navbar';
import {useItemCart} from './hooks/useItemsCart';
import {CartRoutes} from './routes/CartRoutes';

const CardApp=()=>{

  const { cardItems, handlerAddProductCart, handlerDeleteProductCard } =useItemCart();

  return(
    <>
      <Navbar/>
      <div className="container my-4">
        <h3>Card Ap</h3>
        <CartRoutes
          cardItems={cardItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCard={handlerDeleteProductCard}
        />
      </div>
    </>

  );
}
export default CardApp;
//INICIAREMOS CON EL USEREDUCE
