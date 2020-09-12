import {Ingredient} from '../shared/ingrediant.model';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingerdiants: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3),
    new Ingredient('Carrots', 10)];
  constructor() { }
  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient){
    this.ingerdiants.push(ingredient);
  }
}
