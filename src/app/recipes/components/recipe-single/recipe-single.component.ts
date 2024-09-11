import { Component, OnInit } from "@angular/core";
import { IRecipes } from "../../interfaces/i-recipes";
import { ActivatedRoute } from "@angular/router";
import { RecipesRequestsService } from "../../business-logic/requests/recipes-requests.service";

@Component({
    selector: "app-recipe-single",
    templateUrl: "./recipe-single.component.html",
    styleUrl: "./recipe-single.component.css",
})
export class RecipeSingleComponent implements OnInit {
    constructor(private recipesService: RecipesRequestsService, private route: ActivatedRoute) {}

    recipeId = Number(this.route.snapshot.paramMap.get("id"));
    recipe: IRecipes = {} as IRecipes;

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe((data) => {
            this.recipe = data.find((recipe) => recipe.id === this.recipeId) ?? ({} as IRecipes);
        });
    }
}
