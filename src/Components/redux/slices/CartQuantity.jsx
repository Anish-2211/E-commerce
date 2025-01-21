import {createSlice} from '@reduxjs/toolkit'

const cartQuantitySlice = createSlice({
    name:"CartQuantity",
    initialState:1,
    reducers:{
        addQuantity(state){
            state+1;
        },
        removeQuantity(state){
             (state-1);
        }
    }
})
export const{addQuantity,removeQuantity} = cartQuantitySlice.actions;
export default cartQuantitySlice.reducer;