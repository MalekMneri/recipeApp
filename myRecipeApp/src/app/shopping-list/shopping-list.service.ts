import {Ingredient} from '../shared/ingrediant.model';
import {EventEmitter, Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class ShoppingListService {
  IngredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3),
    new Ingredient('Carrots', 10)];
  constructor() { }

  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
