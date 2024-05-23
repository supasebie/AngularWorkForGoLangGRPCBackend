import { Component } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://shop.postcardmania.com/cdn/shop/products/Sample-Of-Recipe-Postcard-Marketing-Ideas-REC-1012_1080x.jpg?v=1624031879'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://shop.postcardmania.com/cdn/shop/products/Recipe-Postcard-Direct-Mail-Design-REC-1016_1080x.jpg?v=1624031886'
    ),
  ];

  constructor() {}
}
