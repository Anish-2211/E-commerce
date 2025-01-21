import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push({...action.payload, count : 1})
        },
        remove(state,action){
            return state.filter((item)=> item.id !== action.payload);
        }
    }
})
export const{add,remove} = cartSlice.actions;
export default cartSlice.reducer;