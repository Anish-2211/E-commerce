import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {add} from '../../Components/redux/slices/cartSlice'


const ProductDetailsPage = () => {
    const[productDetails, setProductDetails]= useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const{id} = useParams();
   
    console.log("i am id",id)

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/'+id)
        .then((res)=>setProductDetails(res.data))
      }
      ,[]);
      console.log("i am product details",productDetails);



      const handleAddToCart=(product)=>{
            dispatch(add(product));
            console.log(add(product))
          };
          
          const handleBuyNow=(product)=>{
            dispatch(add(product));
            navigate('/cart')
          }


  return (
    <div id='mainContainer' className='flex h-screen w-screen bg-gray-500 p-5 mt-5 border-green-400 border-[3px] text-black'>
        
        
        <div key={productDetails.id} className='bg-red-400 flex h-[90%] w-[100%] p-10'>
            <div className='bg-blue-500 h-[90%]  w-[30%]'>
                <img src={productDetails.images} alt="img" className='h-full' />

            </div>

            <div className=' h-[90%] w-[70%] flex flex-col items-start p-10'>
                
                    <span className='text-2xl font-bold'>{productDetails.title}</span>
                    <span>ratings: {productDetails.rating}</span>
                       <span  className='text-sm text-start mt-5 '>{productDetails.description}</span>
                       <span>category: {productDetails.category}</span>
                       <span className='border border-black w-[100%] m-5'></span>

                       <div className='flex'>
                        <span>{-productDetails.discountPercentage}%</span>

                       <span> &nbsp;&nbsp; &#8377;{Math.floor(productDetails.price)}</span>
                       </div>


                       <div className='flex'>
                        <span className='text-sm ml-2'>M.R.P: &nbsp;</span>
                       <span className='line-through '>&#8377;{Math.floor(productDetails.price+(productDetails.price * (productDetails.discountPercentage/100)))}</span>
                       </div>

                       <div className='btnCart&BuyDiv mt-20 flex justify-between w-[35%]'>
                      <button className=' bg-white' onClick={()=>handleAddToCart(productDetails)}>Add To Cart</button>
                      <button className='bg-white' onClick={()=>handleBuyNow(productDetails)}>Buy Now</button>
                    </div>

            </div>
        

        </div>
        
           
            
      
    </div>
  )
}

export default ProductDetailsPage;


