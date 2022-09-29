import { configureStore } from '@reduxjs/toolkit';
import recipes from '../redux/recipeSlice';


export const store = configureStore({
  reducer: {
    recipes: recipes,
    // users:users,
  },
});
