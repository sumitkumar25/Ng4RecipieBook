import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';
import { Response } from '@angular/http/src/static_response';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/Rx';
import * as firebase from 'firebase';
@Injectable()
export class FirebaseServiceService {
  private root = 'https://recipebook-1632a.firebaseio.com/';
  private recipesExt = 'recipes.json';
  authToken = '';
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeAllRecipes() {
    return this.http.put(this.root + this.recipesExt, this.recipeService.getRecipes() + '?auth=' + this.authToken);
  }
  retrieveAllRecipes() {
    this.http.get(this.root + this.recipesExt + '?auth=' + this.authToken)
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

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  createUserWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  logout() {
    this.authToken = '';
    return firebase.auth().signOut();
  }
  setUserCredentials() {
    return firebase.auth().currentUser.getIdToken();
  }
  isAutheticated() {
    return this.authToken.length > 0;
  }
}
