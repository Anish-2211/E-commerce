import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPage.css'
import { remove,incrementCount ,decrementCount} from '../../Components/redux/slices/cartSlice';

const CartPage = () => {
   const cartItems = useSelector((state)=> state.cart);
   
   
  //  const total = cartItems.reduce((a,b)=> a + (b.price),0);
  const total = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.count); // Multiply price by quantity for each item
  }, 0);
   const cartItemsQuantity = useSelector((state)=>state.cartQuantity);
   const dispatch = useDispatch();

    const removeFromCart=(id)=>{
        dispatch(remove(id));
    };



    const handleIncrement = (id) => {
      dispatch(incrementCount(id)); 
    };

    const handleDecrement =(id)=>{
      dispatch(decrementCount(id));
    }



    // const addQuantityHandler = (e)=>{
    //   dispatch(addQuantity(e));
    //   console.log(cartItemsQuantity);
      
    // }
    // const removeQuantityHandler = (e)=>{
    //  dispatch(removeQuantity(q))
    //     console.log(cartItemsQuantity)
      
    // }
    console.log("cartItemsQuantity",cartItemsQuantity);





    
  return (
    <div>
        i am cart page
        
           {( cartItems.map((item) => {
            return(
            <div className='CartContainer'>
                
                <span>{item.title}</span>
                <span>{item.count*(item.price)}</span>
               
                <img src={item.images[0]} alt="image" />
                <div>
                 
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <button onClick={()=>removeFromCart(item.id)}>Delete</button>

            </div>
           )}))
           }
           <h1>total bill = Rs {total}</h1>

          
     
       
    </div>
  )
}

export default CartPage;
