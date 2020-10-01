import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: [ './recipe-detail.component.css' ]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipesService,
    private SLService: ShoppingListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.recipe = this.recipeService.getRecipeFromId(+this.route.snapshot.params['id']);
      this.route.params.subscribe((params: Params) => {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      });
  }
  addToShoppingListClicked(): void {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
    console.log('data sent');
  }
}
