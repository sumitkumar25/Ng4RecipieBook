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
  @ViewChild('shoppingList') shoppingListEditForm;
  ingEditMode = false;
  ingEditId: number = null;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingService.ingredientEdited.subscribe(
      (ing: Ingrediant) => {
        this.ingEditMode = true;
        // this.ingEditId = index;
        this.shoppingListEditForm.setValue({
          'name': ing.name,
          'amount': ing.amount,
          'unit': ing.unit
        });
      }
    );
  }

  addItem() {
    // if (this.nameRef.nativeElement.value && this.amountRef.nativeElement.value && this.unitRef.nativeElement.value) {
    //   const ing = new Ingrediant(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value, this.unitRef.nativeElement.value)
    //   this.shoppingService.addIngredient(ing);
    // }
  }
  shoppingListSubmit(shoppingList: NgForm) {
    const ing = new Ingrediant(shoppingList.value.name, shoppingList.value.amount, shoppingList.value.unit);
    this.shoppingService.addIngredient(ing);
  }

  clearForm() {

  }

  deleteItem() {

  }
}
