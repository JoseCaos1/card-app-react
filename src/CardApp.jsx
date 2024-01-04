import {CardView} from './components/CardView';
import {CatalogView} from './components/CatalogView';
import {useItemCart} from './hooks/useItemsCart';

const CardApp=()=>{

  const { cardItems, handlerAddProductCart, handlerDeleteProductCard } =useItemCart();

  return(
    <>
      <div className="container my-4">
        <h3>Card Ap</h3>

        {/* Producto */}
        <CatalogView handler={ handlerAddProductCart }  />

        {/* Tabla*/}
        {
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
