import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingService } from './shopping/shopping.service';
import { RecipeService } from './recipe/recipe.service';
import { FirebaseServiceService } from './http/firebase-service.service';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './common/shared/shared.module';
import { AuthenticationModule } from './auth/authentication/authentication.module';
import { AppRoutingModule } from './routing/app.routing.module';
import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService, FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
