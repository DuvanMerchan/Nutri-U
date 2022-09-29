import { configureStore } from '@reduxjs/toolkit';
import ingredients from '../redux/ingredientSlice';
import recipes from '../redux/recipeSlice';


export const store = configureStore({
  reducer: {
    recipes: recipes,

    ingredients: ingredients
    // users:users,
  },
});
