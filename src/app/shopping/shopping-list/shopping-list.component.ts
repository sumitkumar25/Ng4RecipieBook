import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../../common/ingrediant.model';
import { ShoppingService } from '../shopping.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediant[];
  subscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingrediantsChanged.subscribe(
      (updatedIngredients: Ingrediant[]) => {
        this.ingrediants = updatedIngredients;
      }
    );
  }
  selectForEditing(index: number) {
    this.shoppingService.loadForEditing(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
