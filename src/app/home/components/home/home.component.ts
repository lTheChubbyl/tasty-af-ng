import { Component, OnInit } from "@angular/core";
import { RecipesApiService } from "../../../recipes/business-logic/api/recipes-api.service";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
    constructor(private recipesService: RecipesApiService) {}

    recipes: IRecipes[] = [];

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipes = data;
        });
    }
}
