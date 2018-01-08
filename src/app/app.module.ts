import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DropdownDirectiveDirective } from './common/dropdown-directive.directive';
import { ShoppingService } from './shopping/shopping.service';
import { AppRoutingModule } from './routing/app.routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { HttpModule } from '@angular/http';
import { FirebaseServiceService } from './http/firebase-service.service';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RecipeListComponent, RecipeItemComponent, ShoppingListComponent,
    ShoppingListEditComponent, RecipesComponent, RecipeDetailComponent, DropdownDirectiveDirective,
    RecipeStartComponent, RecipeEditComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule
  ],
  providers: [ShoppingService, RecipeService,FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
