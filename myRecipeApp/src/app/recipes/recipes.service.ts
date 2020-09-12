import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingrediant.model';


@Injectable({providedIn: 'root'})
export class RecipesService {
  // tslint:disable-next-line:variable-name
  private recipes: Recipe[] = [
    new Recipe('Lasagna',
      'Italian I guess made with ALOT of cheese ',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [{name: 'pasta', amount: 1}, {name: 'Cheese', amount: 3}]),
    new Recipe('Pizza',
      'Also italian, man italians are leaders of industry',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [{name: 'Buns', amount: 1}, {name: 'Pepperoni', amount: 10}])
  ];
  clickedRecipe = new EventEmitter<Recipe>();
  ingredientListSent = new EventEmitter<Ingredient[]>();

  constructor() { }

    getrecipes(): Recipe[] {
      return this.recipes.slice();
  }

}
