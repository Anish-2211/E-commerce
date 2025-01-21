import {createSlice} from '@reduxjs/toolkit'


const AllCategoriesSlice = createSlice({
    name: "AllCategoriesSlice",
    initialState:[],
    reducers:{
        selectCategoriesReducers(state,action){
            state.push(action.payload)
            
        }
    }
});
export const {selectCategoriesReducers} = AllCategoriesSlice.actions;
export default AllCategoriesSlice.reducer;