import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState:{
        recipes:[],
        detail:{},
    },
    reducers:{
        getAllRecipes: (state, action)=>{
            state.recipes = action.payload
        },
        getRecipeById: (state, action)=>{
            state.detail = action.payload
        },
        cleanDetail: (state, action)=>{
            state.detail = ''
        }
    }
})

export const {getAllRecipes, getRecipeById} = recipesSlice.actions

export default recipesSlice.reducer