import { Component, signal } from '@angular/core';
import {Ingredient } from '../_shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients = signal<Ingredient[]>([
    new Ingredient('Banana', 12),
    new Ingredient('Peach', 19),
    new Ingredient('Pear', 2),
    new Ingredient('Beef', 8),
  ]);
}
