import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirectiveDirective } from './common/dropdown-directive.directive';
import { ShoppingService } from './shopping/shopping.service';
import { AppRoutingModule } from './routing/app.routing.module';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { HttpModule } from '@angular/http';
import { FirebaseServiceService } from './http/firebase-service.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MessagingComponent } from './common/messaging/messaging.component';
import { RecipeRoutesModule } from './recipe/recipe-routes/recipe-routes.module';
import { RecipeModuleModule } from './recipe/recipe-module/recipe-module.module';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ShoppingListComponent,
    ShoppingListEditComponent, DropdownDirectiveDirective,
    SigninComponent, SignupComponent, MessagingComponent
  ],
  imports: [
    BrowserModule, RecipeModuleModule, AppRoutingModule, HttpModule, FormsModule, RecipeRoutesModule
  ],
  providers: [ShoppingService, RecipeService, FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
