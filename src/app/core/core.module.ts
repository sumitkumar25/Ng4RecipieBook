import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModuleModule } from '../recipe/recipe-module/recipe-module.module';
import { ShoppingModuleModule } from '../shopping/shopping-module/shopping-module.module';
import { AppRoutingModule } from '../routing/app.routing.module';
import { HttpModule } from '@angular/http';
import { RecipeRoutesModule } from '../recipe/recipe-routes/recipe-routes.module';
import { SharedModule } from '../common/shared/shared.module';
import { AuthenticationModule } from '../auth/authentication/authentication.module';
import { HeaderComponent } from '../../layout/header/header.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent, AppRoutingModule]
})
export class CoreModule { }
