import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  // @ts-ignore
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(nameInput: HTMLInputElement) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}