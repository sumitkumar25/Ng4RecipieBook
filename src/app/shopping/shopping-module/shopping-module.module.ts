import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../common/shared/shared.module';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';
import { ShoppingRoutes } from './shopping-routes';

@NgModule({
  imports: [
    CommonModule, RouterModule, SharedModule, FormsModule, ShoppingRoutes
  ],
  declarations: [ShoppingListComponent, ShoppingListEditComponent]
})
export class ShoppingModuleModule { }
