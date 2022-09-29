import { createSlice } from "@reduxjs/toolkit";


export const dietSlice = createSlice({
    name: 'diets',
    initialState:{
        diets:[],
        diet:''
    },
    reducers:{
        getAllDiet: (state, action)=>{
            state.diets = action.payload
        },
        filterByDiet:  (state, action)=>{
            state.diet = action.payload
        },
    }
})

export const { getAllDiet } = dietSlice.actions

export default dietSlice.reducer