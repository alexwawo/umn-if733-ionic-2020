import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Bakar',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2020/03/Resep-Nasi-Bakar-Bandung.jpg?fit=1496%2C1594&ssl=1',
      ingredients: ['nasi', 'ayam', 'cabe']
    },
    {
      id: 'r2',
      title: 'Nasi Campur',
      imageUrl: 'https://img-global.cpcdn.com/recipes/e22ab2c11776f19c/1200x630cq70/photo.jpg',
      ingredients: ['nasi', 'timun', 'ikan']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find( recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
