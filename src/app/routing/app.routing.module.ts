import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipe/recipes/recipes.component';
import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
const appRoutes = [
    {
        path: 'recipes', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping', component: ShoppingListComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
