import { Component, OnInit } from "@angular/core";
import { IRecipes } from "../../interfaces/i-recipes";
import { RecipesApiService } from "../../business-logic/api/recipes-api.service";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
    styleUrl: "./recipes.component.css",
})
export class RecipesComponent implements OnInit {
    constructor(private recipesService: RecipesApiService) {}

    recipes: IRecipes[] = [];

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipes = data.slice(0, 5);
        });
    }
}
