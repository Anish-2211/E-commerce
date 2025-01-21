import React from 'react'
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <nav>
      
        <Link to="/" style={{color:"black"}}>Home</Link>
        <Link to="/categories" style={{color:"black"}}>Categories</Link>
        <Link to="/womens" style={{color:"black"}}>Women's</Link>
        <Link to="/contact" style={{color:"black"}}>Contact-Us</Link>
        <Link to="/about" style={{color:"black"}}>About</Link>
       
        
    </nav>
  )
}

export default Navbar;
