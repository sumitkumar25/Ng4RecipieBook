import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipe/recipes/recipes.component';
import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
const appRoutes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
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
