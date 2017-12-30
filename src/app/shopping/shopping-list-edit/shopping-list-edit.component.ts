import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingrediant } from '../../common/ingrediant.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('shoppingList') ingridientForm;
  ingEditMode = false;
  ingEditId: number = null;
  editedIngredient: Ingrediant;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingService.ingredientEdited.subscribe(
      (index: number) => {
        this.ingEditMode = true;
        this.ingEditId = index;
        this.editedIngredient = this.shoppingService.getIngredient(index);
        this.ingridientForm.setValue({
          'name': this.editedIngredient.name,
          'amount': this.editedIngredient.amount,
          'unit': this.editedIngredient.unit
        });
      }
    );
  }
  shoppingListSubmit(shoppingList: NgForm) {
    const ing = new Ingrediant(shoppingList.value.name, shoppingList.value.amount, shoppingList.value.unit);
    if (this.ingEditMode) {
      this.shoppingService.updateIngredient(this.ingEditId, ing);
    } else {
      this.shoppingService.addIngredient(ing);
    }

    this.clearForm();
  }

  clearForm() {
    this.ingridientForm.reset();
    this.ingEditMode = false;
  }

  deleteItem() {
    this.shoppingService.deleteItem(this.ingEditId);
    this.clearForm();
  }
}
