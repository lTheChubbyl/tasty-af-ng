import { Component, OnInit } from "@angular/core";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";
import { RecipesRequestsService } from "../../../recipes/business-logic/requests/recipes-requests.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
    constructor(private recipesService: RecipesRequestsService) {}

    recipes: IRecipes[] = [];

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipes = data;
        });
    }
}
