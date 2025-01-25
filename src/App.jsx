import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'


import HomePage from './pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import CartPage from './pages/CartPage/CartPage'
import Footer from './Components/Footer/Footer'
import Womens from './pages/WomenClothingPage/Womens'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Navbar from './Components/Navbar/Navbar'
import Categories from './pages/Categories/Categories'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import SelectedCategoryPage from './pages/SelectedCategoryPage/SelectedCategoryPage'
import AddressDetails from './Components/AddressDetails/AddressDetails'


function App() {
  return(
    <div>
      <Header/>
      <Navbar/>
      {/* <AddressDetails/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/selectedCategory/:category' element={<SelectedCategoryPage/>}/>
        <Route path='/:id' element={<ProductDetailsPage/>}/>

        <Route path='/womens' element={<Womens/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
