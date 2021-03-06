import { Recipe } from './recipe.model';
import { OnInit, Injectable } from '@angular/core';
import { Ingrediant } from '../common/ingrediant.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService implements OnInit {
    recipeChanged = new Subject<Recipe[]>();
    recADescription: string = 'Also commonly used to refer to the variety of pasta dishes,' +
        'pasta is typically a noodle made from an unleavened dough' +
        'of a durum wheat flour mixed with water or eggs and formed' +
        'into sheets or various shapes, then cooked by boiling or baking';
    recBDescription: string = 'Also commonly used to refer to the variety of pizza dishes,' +
        'pizza is typically a noodle made from an unleavened dough' +
        'of a durum wheat flour mixed with water or eggs and formed' +
        'into sheets or various shapes, then cooked by boiling or baking';
    recCDescription: string = 'Also commonly used to refer to the variety of nacho dishes,' +
        'nacho is typically a noodle made from an unleavened dough' +
        'of a durum wheat flour mixed with water or eggs and formed' +
        'into sheets or various shapes, then cooked by boiling or baking';
    private rescipes: Recipe[] = [
        new Recipe('Italian Pasta', this.recADescription,
            'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/' +
            'FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595164628.jpeg',
            [new Ingrediant('ingA', 100, 'mg'), new Ingrediant('ingB', 100, 'mg')]),
        new Recipe('Italian Pizza',
            this.recBDescription,
            'https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg',
            [new Ingrediant('ingAa', 100, 'mg'), new Ingrediant('ingBb', 100, 'mg')]),
        new Recipe('Italian Nachos',
            this.recCDescription,
            'https://images-gmi-pmc.edge-generalmills.com/3ebc9927-47d2-4eae-90b3-590036635d18.jpg',
            [new Ingrediant('abc', 100, 'mg'), new Ingrediant('abc', 100, 'mg')])
    ];
    constructor(private shoppingService: ShoppingService) { }
    ngOnInit() {

    }
    setRecipes(recipes: Recipe[]) {
        this.rescipes = recipes;
        this.recipeChanged.next(this.rescipes);
    }
    getRecipes() {
        return this.rescipes.slice();
    }
    getRecipe(id: number) {
        return this.rescipes[id];
    }
    addRecipe(recipe: Recipe) {
        if (recipe) {
            this.rescipes.push(recipe);
            this.updateRecipeChanges();
        }
    }
    updateRecipe(index: number, recipe: Recipe) {
        if (index >= 0 && recipe) {
            this.rescipes[index] = recipe;
            this.updateRecipeChanges();
        }
    }
    updateRecipeChanges() {
        this.recipeChanged.next(this.rescipes.slice());
    }
    ingredientToShoppingList(ingrediants: Ingrediant[]) {
        if (ingrediants.length) {
            this.shoppingService.addIngredients(ingrediants);
        }
    }
    deleteRecipe(index: number) {
        this.rescipes.splice(index, 1);
        this.updateRecipeChanges();
    }
}
