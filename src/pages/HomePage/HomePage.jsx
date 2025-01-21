import React from 'react'
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
import './HomePage.css'
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../Components/redux/slices/cartSlice'
import { useNavigate} from 'react-router-dom';

const HomePage = () => {
    const [product, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [handleCartButton, setHandleCartButton]= useState([]);
    const cartItems = useSelector(store => store.cart);
    

    useEffect(()=>{
      fetchData();
    //   return products;
    },[]);
  
    const fetchData = async()=>{
       await axios.get('https://dummyjson.com/products')
    .then((res)=>{
      setProducts(res.data);
    });
  }
  
    const handleAddToCart=(product)=>{
      setHandleCartButton(true)
      dispatch(add(product));
      console.log(handleCartButton)
    }

    const goToCart= ()=>{
      // console.log(handleCartButton)
        navigate('/cart')
      
    }
  
    const handleNavigate=(q)=>{
      navigate(`/${+q.id}`)
  }


  const handleBuyNow=(product)=>{
    dispatch(add(product));
    navigate('/cart')
  }


    return (
      

        <div id='bodyContainer'>
        
        {product.products?.map((q) => {
            return (
              <div className='bg-white'>
                <div id='productsContainer' onClick={()=>handleNavigate(q)}>
                <div key={q?.id} className='title '>
                    <span>{q?.title}</span>
                    <span>category: {q?.category}</span>
                    <span>ratings: {q?.rating}</span>
                </div>
                {/* title div close */}
                    <img src={q?.images} />
                    <div className='priceDiv'>
                    <span className='price'>Price:  &#8377;{80*Math.floor(q?.price)}</span>
                    <span className='price'>Discount%: {q?.discountPercentage}%</span>
                    </div>
                   
                </div>
                 {/* priceDiv close */}
             <div className='btnCart&BuyDiv'>
             {/* <button className='cartBtn' onClick={handleCartButton ? ()=>goToCart(q):() =>handleAddToCart(q)}>{handleCartButton?"Go to cart":"Add To Cart"}</button> */}
             <button className='cartBtn' 
              onClick={cartItems.length > 0 && cartItems.find((citem) => citem.id === q?.id) ? goToCart:()=>handleAddToCart(q)}>{(cartItems.length > 0 && cartItems.find((citem) => citem.id === q?.id)?"Go to cart":"Add To Cart")}
              </button>

             <button onClick={()=>handleBuyNow(q)}>Buy Now</button>
           </div>
           </div>
                
            )
            

        })}
        </div>


      
    )
}

export default HomePage;







