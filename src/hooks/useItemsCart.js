import {useEffect, useReducer} from "react";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from '../reducer/itemsActions'
import {itemsReducer} from '../reducer/itemsReducer';

const initialCardItems =JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemCart = ()=>{

  const [cardItems, dispatch] =useReducer(itemsReducer, initialCardItems);

  useEffect(()=>{
    sessionStorage.setItem("cart", JSON.stringify(cardItems));
  }, [cardItems])


  const handlerAddProductCart = (product) =>{

    //Para ver si ya existe un id igual en el arreglo
    const hasItem = cardItems.find((i)=>i.product.id ===product.id);

    if(hasItem){
      dispatch({
          type: UpdateQuantityProductCart,
          payload :product,
        })
    }
    else{

      dispatch({
          type: AddProductCart,
          payload : product
        })
    }
  }

  const handlerDeleteProductCard = (id) =>{
    dispatch(
      {
        type: DeleteProductCart,
        payload: id,
      }
    )
  }

  return{
    cardItems,
    handlerAddProductCart,
    handlerDeleteProductCard
  }

}
