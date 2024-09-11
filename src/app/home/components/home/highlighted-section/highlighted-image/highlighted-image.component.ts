import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-highlighted-image",
    templateUrl: "./highlighted-image.component.html",
    styleUrl: "./highlighted-image.component.css",
})
export class HighlightedImageComponent {
    @Input() highlighted: IRecipes;
}
