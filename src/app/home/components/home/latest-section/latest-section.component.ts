import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../recipes/interfaces/i-recipes";
import { RecipesRequestsService } from "../../../../recipes/business-logic/requests/recipes-requests.service";

@Component({
    selector: "app-latest-section",
    templateUrl: "./latest-section.component.html",
    styleUrl: "./latest-section.component.css",
})
export class LatestSectionComponent {
    constructor(private recipesService: RecipesRequestsService) {}

    latestList: IRecipes[] = [];

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe({
            next: (res) => {
                this.latestList = res.slice(0, 6);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
