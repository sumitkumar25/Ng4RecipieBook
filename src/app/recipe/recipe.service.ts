import { Recipe } from './recipe.model';
import { OnInit, Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingrediant } from '../common/ingrediant.model';
import { ShoppingService } from '../shopping/shopping.service';
@Injectable()
export class RecipeService implements OnInit {
    recipeSelected = new EventEmitter<Recipe>();
    private rescipes: Recipe[] = [
        new Recipe('rec1',
            'rec1 description',
            'http://media2.sailusfood.com/wp-content/uploads/2013/08/irani-samosa.jpg',
            [new Ingrediant('ingA', 100, 'mg'), new Ingrediant('ingB', 100, 'mg')])
    ];
    constructor(private shoppingService: ShoppingService) { }
    ngOnInit() {

    }
    getRecipes() {
        return this.rescipes.slice();
    }
    ingredientToShoppingList(ingrediants: Ingrediant[]) {
        if (ingrediants.length) {
            this.shoppingService.addIngredients(ingrediants);
        }
    }
}
