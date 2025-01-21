import React from 'react'
import '../Header/Header.css'



import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const[inputValue, setInputValue] = useState();
  const items = useSelector((state)=>state.cart);
  const handleInputValue=(e)=>{
    setInputValue(e.target.value)
  }
  // console.log(inputValue);
 const navigate = useNavigate();
 const goToCart=()=>{
  navigate('/cart')
 }

  return (
    <header>
        <div id='imageContainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJnI0X82NacQvGrQlnVfWttwp4z8homg_qA&s" alt="image" />
            <div className='search'>
            <input type="text" placeholder='Search items' onChange={handleInputValue} value={inputValue} />
            <button type='submit'>search</button>
            </div>
        </div>
        {/*  */}
        <div id='cartLogin'>
          <div className='cart' onClick={goToCart}>cart: {items.length}
          
          </div>
          
          <div className='login'>Login</div>

        </div>
    </header>
  )
}

export default Header
