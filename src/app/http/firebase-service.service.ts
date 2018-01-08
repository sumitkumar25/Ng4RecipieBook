import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';
import { Response } from '@angular/http/src/static_response';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/Rx';
@Injectable()
export class FirebaseServiceService {
  private root = 'https://recipebook-1632a.firebaseio.com/';
  private recipesExt = 'recipes.json';
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeAllRecipes() {
    return this.http.put(this.root + this.recipesExt, this.recipeService.getRecipes());
  }
  retrieveAllRecipes() {
    this.http.get(this.root + this.recipesExt)
      .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }

        }
        return recipes;
      }
      ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
      );
  }
}
