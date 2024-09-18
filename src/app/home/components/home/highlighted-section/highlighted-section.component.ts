import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../recipes/interfaces/i-recipes";
import { RecipesRequestsService } from "../../../../recipes/business-logic/requests/recipes-requests.service";

@Component({
    selector: "app-highlighted-section",
    templateUrl: "./highlighted-section.component.html",
    styleUrl: "./highlighted-section.component.css",
})
export class HighlightedSectionComponent {
    constructor(private recipesService: RecipesRequestsService) {}

    highlightedList: IRecipes[];

    ngOnInit(): void {
        this.recipesService.getRecipes().subscribe({
            next: (res) => {
                this.highlightedList = res.slice(0, 2);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
