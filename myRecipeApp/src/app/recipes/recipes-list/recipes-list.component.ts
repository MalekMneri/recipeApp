import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is a new recipe for food',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'),
    new Recipe('Second test recipe',
      'This is a newer recipe for food',
      'https://images.immediate.co.uk/production/volatile/sites' +
      '/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
