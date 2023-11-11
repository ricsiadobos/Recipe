import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

Injectable()
export class ShoppingListService {
      ingrediensChanged = new EventEmitter<Ingredient[]>();
      private ingredients: Ingredient[] = [
            new Ingredient("Apple", 3),
            new Ingredient("Orange", 5),
            new Ingredient("Pear", 4)

      ];

      getIngredients() {
            return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
            this.ingredients.push(ingredient);
            this.ingrediensChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredient: Ingredient[]) {
            // ingredient.forEach((ingredient) => {
            // this.addIngredient(ingredient);
            // });
            this.ingredients.push(...ingredient)
            this.ingrediensChanged.emit(this.ingredients.slice());
      }

}