import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../../common/ingrediant.model';
import { ShoppingService } from '../shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[];
  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngredients();
    this.shoppingService.ingrediantsChanged.subscribe(
      (updatedIngredients: Ingrediant[]) => {
          this.ingrediants = updatedIngredients;
      }
    );
  }
}
