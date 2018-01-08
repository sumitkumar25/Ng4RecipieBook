import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingrediant } from '../../common/ingrediant.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  ingToShoppingList(ingredients: Ingrediant[]) {
    if (ingredients.length) {
      this.recipeService.ingredientToShoppingList(ingredients);
    }
  }
  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../recipes']);
  }
}
