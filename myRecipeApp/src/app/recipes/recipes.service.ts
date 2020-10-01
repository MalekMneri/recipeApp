import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Lasagna',
      'Italian I guess made with ALOT of cheese ',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [ { name: 'pasta', amount: 1 }, { name: 'Cheese', amount: 3 } ]
    ),
    new Recipe(
      2,
      'Pizza',
      'Also italian, man italians are leaders of industry',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [ { name: 'Buns', amount: 1 }, { name: 'Pepperoni', amount: 10 } ])
  ];
  ingredientListSent = new EventEmitter<Ingredient[]>();
  constructor(private SLService: ShoppingListService) {}

  getrecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToSL(ingredients: Ingredient[]): void {
    this.SLService.addIngredients(ingredients);
  }
  getRecipeById(id: number): Recipe {
    const foundRecipe = this.recipes.find((s) => {
      return s.id === id;
    });
    return foundRecipe;
  }
}
