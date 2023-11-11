import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Gombás csirke",
            "Tanyasi módra az erdei gombából",
            "https://image-api.nosalty.hu/nosalty/images/recipes/OS/Lx/gombas-tejfolos-csirkemell-paprikas.jpeg?w=992&fit=crop&fm=webp&crop=1024%2C704%2C%2C&h=685&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=1c78a9df22ce8ecd265fff417ae2c708",
            [
                new Ingredient('Chicken meat', 1),
                new Ingredient('mushroom', 4),
            ]
        ),
        new Recipe(
            "Rántott hús krumplival",
            "Kétszer úgy megránva, hogy csak na",
            "https://www.mindmegette.hu/images/327/O/rantott-hus-2.jpg",
            [
                new Ingredient('Chicken meat', 1),
                new Ingredient('potato', 6),]
        )];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }


}