import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe(
    "Gombás csirke", 
    "Tanyasi módra az erdei gombából", 
    "https://image-api.nosalty.hu/nosalty/images/recipes/OS/Lx/gombas-tejfolos-csirkemell-paprikas.jpeg?w=992&fit=crop&fm=webp&crop=1024%2C704%2C%2C&h=685&mark=watermark.png&markpos=bottom-left&markpad=20&markw=&s=1c78a9df22ce8ecd265fff417ae2c708"
  ),
  new Recipe(
    "Rántott hús krumplival", 
    "Kétszer úgy megránva, hogy csak na", 
    "https://www.mindmegette.hu/images/327/O/rantott-hus-2.jpg"
  )];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
