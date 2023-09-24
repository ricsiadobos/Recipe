import { Directive, ElementRef, Input, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{


        //false =  nem kapja meg az elem a CSS class kiegészítést
        //true  =  megkapja a CSS class az "open"
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
  
}


