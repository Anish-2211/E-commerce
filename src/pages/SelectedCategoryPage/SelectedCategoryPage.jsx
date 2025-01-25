import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { add } from '../../Components/redux/slices/cartSlice';

const SelectedCategoryPage = () => {
    const [selectedCategory, setSelectedCategory]= useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
     
    const {category} = useParams();

    console.log("i am category",category);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/' + category)
        .then((res)=>setSelectedCategory(res.data))
      }
      ,[])

    const handleAddToCart=(product)=>{
          dispatch(add(product));
        };
        const handleNavigate=(q)=>{
          console.log(q)
            navigate(`/${+q.id}`)
        }

        const handleBuyNow=(product)=>{
          dispatch(add(product));
          navigate('/cart')
        }

  return (
    <div id='bodyContainer'>
        
        {selectedCategory.products?.map((q) => {
            return (
              <div className='bg-white'>
                <div id='productsContainer' key={q.id} onClick={() => handleNavigate(q)}>
                    
                <div key={q?.id} className='title '>
                    <span>{q?.title}</span>
                    <span>category: {q?.category}</span>
                    <span>ratings: {q?.rating}</span>
                </div>
                {/* title div close */}
                    <img src={q?.images[0]} />
                    <div className='priceDiv'>
                    <span className='price'>Price:  &#8377;{(q?.price)}</span>
                    <span className='price'>Discount%: {q?.discountPercentage}%</span>
                    </div>
                   
                </div>

                 {/* priceDiv close */}
                 <div className='btnCart&BuyDiv'>
                      <button className='cartBtn' onClick={()=>handleAddToCart(q)}>Add To Cart</button>
                      <button onClick={()=>handleBuyNow(q)}>Buy Now</button>
                    </div>


                </div>
                
            )

        })}
        </div>
  )
}

export default SelectedCategoryPage;
