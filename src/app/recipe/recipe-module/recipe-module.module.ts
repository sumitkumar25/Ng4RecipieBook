import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModuleModule { }
