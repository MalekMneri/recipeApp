import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']

})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipesService: RecipesService) { }

 // this was implemented here and not in the recipe-detail component
  // because this is initiated before the click and therefore can recive the click event
  ngOnInit(): void {
    this.recipesService.clickedRecipe.subscribe(
      (recipe: Recipe) => {this.selectedRecipe = recipe; }
    );
  }

}
