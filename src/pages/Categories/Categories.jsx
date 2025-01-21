import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Categories.css'
import {  useNavigate  } from 'react-router-dom';
import  '../../assets/Category_Images/beauty.png'


const Categories = () => {
  const[categories, setCategories]=useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>setCategories(res.data))
  }
  ,[])
  console.log("i am category page",categories);

  const handleCategory=(item)=>{
    navigate('/categories/selectedCategory/' + item.name.split(" ").join("-"));
  }

  return (
        <div id='allCategoryContainer' style={{"backgroundColor":"grey"}}>
          {categories?.map((item,index)=>(
           
            <div key={index} className='categoryContainer' style={{"border":"1px solid black"}} onClick={()=>handleCategory(item)}>
              <h3>{item?.name}
              </h3>
              <img src={item.images} alt="img" />
            </div> 
          ))}
        </div>
  )
}

export default Categories;

