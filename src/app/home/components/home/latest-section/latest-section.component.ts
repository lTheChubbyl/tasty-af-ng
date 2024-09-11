import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-latest-section",
    templateUrl: "./latest-section.component.html",
    styleUrl: "./latest-section.component.css",
})
export class LatestSectionComponent {
    @Input() latestList: IRecipes[];
}
