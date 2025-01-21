import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import cartQuantityReducer from '../slices/CartQuantity'

const store = configureStore({
        reducer:{
            cart:cartReducer,
            cartQuantity:cartQuantityReducer
        }

    });
    export default store;