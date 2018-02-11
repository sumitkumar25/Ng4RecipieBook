import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes = [
    { path: '', loadChildren: '../auth/authentication/authentication.module#AuthenticationModule'},
    { path: 'recipes', loadChildren: '../recipe/recipe-module/recipe-module.module#RecipeModuleModule' },
    { path: 'shopping', loadChildren: '../shopping/shopping-module/shopping-module.module#ShoppingModuleModule' }
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
