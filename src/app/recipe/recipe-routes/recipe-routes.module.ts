import { NgModule } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
const routes: Routes = [{
  path: '', component: RecipesComponent,
  children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutesModule { }
