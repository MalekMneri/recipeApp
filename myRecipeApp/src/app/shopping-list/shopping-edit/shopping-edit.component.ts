import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  addIngrediant(name: string, amount: number){
    this.shoppingListService.addIngredient({name, amount});

  }
  ngOnInit(): void {
  }

}
