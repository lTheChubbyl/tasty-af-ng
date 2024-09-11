import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-highlighted-section",
    templateUrl: "./highlighted-section.component.html",
    styleUrl: "./highlighted-section.component.css",
})
export class HighlightedSectionComponent {
    @Input() highlightedList: IRecipes[];
}
