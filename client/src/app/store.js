import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import diets from '../redux/dietsSlice';
=======
import ingredients from '../redux/ingredientSlice';
>>>>>>> fsliceingredients
import recipes from '../redux/recipeSlice';
import ingredients from '../redux/ingredientSlice';

export const store = configureStore({
  reducer: {
    recipes: recipes,
<<<<<<< HEAD
    diets: diets,
=======

    ingredients: ingredients
>>>>>>> fsliceingredients
    ingredients: ingredients,
    // users:users,
  },
});
