import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen:boolean = false;

  @HostListener('click') ddClick() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
  }

}
