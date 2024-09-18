import { Component, Input, OnInit } from "@angular/core";
import { IRecipes } from "../../../../../recipes/interfaces/i-recipes";
import { RecipesRequestsService } from "../../../../../recipes/business-logic/requests/recipes-requests.service";

@Component({
    selector: "app-highlighted-description",
    templateUrl: "./highlighted-description.component.html",
    styleUrl: "./highlighted-description.component.css",
})
export class HighlightedDescriptionComponent implements OnInit {
    constructor(private recipesService: RecipesRequestsService) {}

    @Input() highlighted: IRecipes;

    commentNum: number;

    ngOnInit(): void {
        this.recipesService.getRecipeComments(this.highlighted.id).subscribe({
            next: (res) => {
                this.commentNum = res.length;
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
