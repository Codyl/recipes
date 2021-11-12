import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedRecipe = {
      name: this.route.snapshot.params['id'],
      description: '',
      imagePath: '',
      ingredients: [new Ingredient('test',1)]
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe.name = params['id']
      }
    );
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}
