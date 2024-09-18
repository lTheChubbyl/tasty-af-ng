import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesRequestsService } from "../../business-logic/requests/recipes-requests.service";
import { IRecipes } from "../../interfaces/i-recipes";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
    styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
    recipes: IRecipes[] = [];

    constructor(private recipesService: RecipesRequestsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params) => {
            const categoryId = params.get("category");
            const searchTerm = params.get("search") || "";

            if (searchTerm.trim()) {
                this.recipesService.getRecipesBySearch(searchTerm).subscribe({
                    next: (res) => {
                        this.recipes = res;
                    },
                    error: (err) => {
                        console.log("Error fetching recipes by search:", err);
                        this.recipes = [];
                    },
                });
            } else if (categoryId) {
                this.recipesService.getRecipesByCategory(categoryId).subscribe({
                    next: (res) => {
                        this.recipes = res;
                    },
                    error: (err) => {
                        console.log("Error fetching recipes by category:", err);
                        this.recipes = [];
                    },
                });
            } else {
                this.recipesService.getRecipes().subscribe({
                    next: (res) => {
                        this.recipes = res;
                    },
                    error: (err) => {
                        console.log("Error fetching default recipes:", err);
                        this.recipes = [];
                    },
                });
            }
        });
    }
}
