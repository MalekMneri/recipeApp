import { Component, OnInit } from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingerdiants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Oranges', 3),
    new Ingrediant('Carrots', 10)];
  constructor() { }

  ngOnInit(): void {
  }

}
