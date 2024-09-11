import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-highlighted-description",
    templateUrl: "./highlighted-description.component.html",
    styleUrl: "./highlighted-description.component.css",
})
export class HighlightedDescriptionComponent {
    @Input() highlighted: IRecipes;

    commentNum: number;
}
