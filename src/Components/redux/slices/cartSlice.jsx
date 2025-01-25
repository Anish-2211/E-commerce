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
        },
        incrementCount(state, action) {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
              item.count += 1;
            }
          },

          decrementCount(state, action){
            const item= state.find((item)=>item.id === action.payload );
            if (item && item.count > 1){
                item.count-=1;
            }
          },
    }
})
export const{add,remove, incrementCount, decrementCount} = cartSlice.actions;
export default cartSlice.reducer;