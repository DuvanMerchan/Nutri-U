import { configureStore } from '@reduxjs/toolkit';
import diets from '../redux/dietsSlice';
import recipes from '../redux/recipeSlice';


export const store = configureStore({
  reducer: {
    recipes: recipes,
    diets: diets,
    // users:users,
  },
});
