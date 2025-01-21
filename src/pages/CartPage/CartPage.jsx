import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPage.css'
import { remove } from '../../Components/redux/slices/cartSlice';
import{addQuantity,removeQuantity} from '../../Components/redux/slices/CartQuantity'

const CartPage = () => {
   const cartItems = useSelector((state)=> state.cart);
   console.log(cartItems.length)
   
   const total = cartItems.reduce((a,b)=> a + Math.floor(b.price),0)
   const cartItemsQuantity = useSelector((state)=>state.cartQuantity)
const dispatch = useDispatch();

    const removeFromCart=(id)=>{
        dispatch(remove(id));
    }



    const addQuantityHandler = (q)=>{
      dispatch(addQuantity(q))
    }
    const removeQuantityHandler = (cartItemsQuantity)=>{
      dispatch(removeQuantity(cartItemsQuantity))
    }
    console.log("cartQuantityCount",cartItemsQuantity)



    
  return (
    <div>
        i am cart page
        
           {( cartItems.map((item) => {
            return(
            <div className='CartContainer'>
                
                <span>{item.title}</span>
                <span>{Math.floor(item.price)}</span>
               
                <img src={item.images[0]} alt="image" />
                <div>
                 
                  <button onClick={()=>removeQuantityHandler(cartItemsQuantity)}>-</button>
                  <span>{cartItemsQuantity}</span>
                  <button onClick={()=>addQuantityHandler(cartItemsQuantity)}>+</button>
                </div>
                <button onClick={()=>removeFromCart(item.id)}>Delete</button>

            </div>
           )}))
           }
           <h3>total bill = Rs {total}</h3>
     
       
    </div>
  )
}

export default CartPage;
