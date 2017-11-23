import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingrediant } from '../../common/ingrediant.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  @ViewChild('unitInput') unitRef: ElementRef;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  addItem() {
    if (this.nameRef.nativeElement.value && this.amountRef.nativeElement.value && this.unitRef.nativeElement.value) {
      const ing = new Ingrediant(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value, this.unitRef.nativeElement.value)
      this.shoppingService.addIngredient(ing);
    }
  }

  clearForm() {

  }

  deleteItem() {

  }
}
