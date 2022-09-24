import { Component, ElementRef, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit{

 @ViewChild("nameInput") nameInputRef: ElementRef;
 @ViewChild("amountInput") amountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

 constructor() { }

 ngOnInit(): void {
 }

  onAdditem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
   const ingredient = new Ingredient(ingName, ingAmount);
    this. ingredientAdded.emit(ingredient);
  }
}
