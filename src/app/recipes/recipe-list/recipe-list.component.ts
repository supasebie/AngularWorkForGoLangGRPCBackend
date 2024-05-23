import { Component, signal } from '@angular/core';
import { Recipe } from '../recipe-model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes = signal<Recipe[]>([
    new Recipe(
      'Chicken Parmesan',
      'A delicious Italian dish with breaded chicken, tomato sauce, and cheese.',
      'https://shop.postcardmania.com/cdn/shop/products/Sample-Of-Recipe-Postcard-Marketing-Ideas-REC-1012_1080x.jpg?v=1624031879',
      ['chicken breasts', 'eggs', 'bread crumbs', 'tomato sauce', 'cheese']
    ),
    new Recipe(
      'Seafood Gumbo',
      'A tasty seafood gumbo recipe with shrimp, crab, and okra.',
      'https://shop.postcardmania.com/cdn/shop/products/Recipe-Postcard-Direct-Mail-Design-REC-1016_1080x.jpg?v=1624031886',
      ['shrimp', 'crab', 'okra', 'tomatoes', 'onions', 'celery']
    ),

    // new Recipe(
    //   'Baked Ziti',
    //   'A classic Italian dish that is perfect for a crowd.',
    //   'https://shop.postcardmania.com/cdn/shop/products/Sample-Of-Recipe-Postcard-Marketing-Ideas-REC-1004_1080x.jpg?v=1624031871',
    //   ['ziti pasta', 'tomato sauce', 'cheese', 'ground beef', 'sausage']
    // ),
    // new Recipe(
    //   'Steak with Mushroom Stuffing',
    //   'A juicy steak with a savory mushroom stuffing.',
    //   'https://www.postcardmania.com/wp-content/uploads/blog/img/real-estate-recipe-postcard.jpeg',
    //   ['steak', 'mushrooms', 'bread crumbs', 'eggs', 'onion', 'celery']
    // ),
    // new Recipe(
    //   'Strawberry Shortcake',
    //   'A classic dessert with fresh strawberries and whipped cream.',
    //   'https://www.postcardmania.com/wp-content/uploads/blog/img/realtor-recipe-cards.jpeg',
    //   ['strawberries', 'shortcake biscuits', 'whipped cream']
    // ),
    // new Recipe(
    //   'Mediterranean Greek Salad',
    //   'A refreshing salad with tomatoes, cucumbers, and feta cheese.',
    //   'https://www.postcardmania.com/wp-content/uploads/blog/img/real-estate-recipe-direct-mail.jpeg',
    //   ['tomatoes', 'cucumbers', 'feta cheese', 'olives', 'red onion', 'oregano']
    // ),
  ]);

ngOnInit(): void {
  console.log(this.recipes())
}

  constructor() {}
}
