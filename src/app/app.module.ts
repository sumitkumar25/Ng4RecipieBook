import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingService } from './shopping/shopping.service';
import { RecipeService } from './recipe/recipe.service';
import { FirebaseServiceService } from './http/firebase-service.service';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule
  ],
  providers: [ShoppingService, RecipeService, FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
