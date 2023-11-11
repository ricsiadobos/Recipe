import { Component, Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe-list/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recipeSelected: RecipeService) { }

  ngOnInit(): void {
    this.recipeSelected.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}
