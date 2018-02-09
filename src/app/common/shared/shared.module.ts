import { NgModule } from '@angular/core';
import { DropdownDirectiveDirective } from '../dropdown-directive.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
  ],
  declarations: [DropdownDirectiveDirective],
  exports: [DropdownDirectiveDirective, CommonModule]
})
export class SharedModule { }
