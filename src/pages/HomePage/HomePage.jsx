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
      dispatch(add(product));
    }

    const goToCart= ()=>{
        navigate('/cart')
      
    }
    const handleBuyNow=(product)=>{
          navigate('/cart')
          dispatch(add(product));   
    }
  
    const handleNavigate=(q)=>{
      navigate(`/${+q.id}`)
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
                    <span className='price'>Price:  &#8377;{(q?.price)}</span>
                    <span className='price'>Discount%: {q?.discountPercentage}%</span>
                    </div>
                   
                </div>
                 {/* priceDiv close */}
             <div className='btnCart&BuyDiv'>
             <button className='cartBtn' 
              onClick={cartItems.length > 0 && cartItems.find((citem) => citem.id === q?.id) ? goToCart:()=>handleAddToCart(q)}>{(cartItems.length > 0 && cartItems.find((citem) => citem.id === q?.id)?"Go to cart":"Add To Cart")}
              </button>

             <button onClick={cartItems.length > 0 && cartItems.find((citem) => citem.id === q?.id) ? goToCart:()=>handleBuyNow(q)}>Buy Now</button>
           </div>
           </div>
                
            )
            

        })}
        </div>


      
    )
}

export default HomePage;







