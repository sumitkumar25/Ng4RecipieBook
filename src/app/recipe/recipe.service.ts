import { Recipe } from './recipe.model';
import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

export class RecipeService implements OnInit {
    recipeSelected = new EventEmitter<Recipe>();
    private rescipes: Recipe[] = [
        new Recipe('rec1', 'rec1 description', 'http://media2.sailusfood.com/wp-content/uploads/2013/08/irani-samosa.jpg')
    ];
    constructor() { }
    ngOnInit() {

    }
    getRecipes() {
        return this.rescipes.slice();
    }
}
