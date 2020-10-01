import {Ingredient} from '../shared/ingrediant.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ShoppingListService {

  IngredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3),
    new Ingredient('Carrots', 10)];

  constructor() { }
  addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
  }
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.next(this.ingredients.slice());
  }
}
