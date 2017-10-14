import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  rescipes:Recipe[] = [
    new Recipe("rec1","rec1 description","http://media2.sailusfood.com/wp-content/uploads/2013/08/irani-samosa.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
