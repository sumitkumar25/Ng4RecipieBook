import { Component, OnInit } from '@angular/core';
import {Ingrediant} from "../../common/ingrediant.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants:Ingrediant[] = [new Ingrediant("ingredient 1", 10, "mg"), new Ingrediant("ingredient 2", 5, "mg")];

  constructor() {
  }

  ngOnInit() {
  }

  emittedIngAdded(ing) {
    this.ingrediants.push(ing);
  }
}
