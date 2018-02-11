import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeAllRecipes() {
    return this.httpClient.put(this.root + this.recipesExt + '?auth=' + this.authToken, this.recipeService.getRecipes());
  }
  retrieveAllRecipes() {
    this.httpClient.get<Recipe[]>(this.root + this.recipesExt + '?auth=' + this.authToken)
      .map(
      (recipes) => {
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
