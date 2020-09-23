import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingrediant.model';
import { RecipesService } from '../recipes/recipes.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit {
  ShoppingList: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipesService) { }
  // this method needs the shopping list component to be initialised before it can subscribe to the event
  ngOnInit(): void {
    this.ShoppingList = this.shoppingListService.ingredients;
    // this subscribes every time you open the shopping page ( every time you create the component)
    this.recipeService.ingredientListSent.subscribe(
      (newIngredients: Ingredient[]) => { this.ShoppingList = newIngredients; });

  }

}
