import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  rescipes: Recipe[];
  subScription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subScription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.rescipes = recipes;
      }
    );
    this.rescipes = this.recipeService.getRecipes();
  }
  ngOnDestroy() {
    this.subScription.unsubscribe();
  }
  addNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
