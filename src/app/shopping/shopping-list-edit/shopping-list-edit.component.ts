import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {Ingrediant} from "../../common/ingrediant.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef:ElementRef
  @ViewChild('amountInput') amountRef:ElementRef
  @ViewChild('unitInput') unitRef:ElementRef

  @Output() ingredientAdded = new EventEmitter<Ingrediant>();

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    const ing = new Ingrediant(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value, this.unitRef.nativeElement.value)
    this.ingredientAdded.emit(ing);
  }

  clearForm() {

  }

  deleteItem() {

  }
}
