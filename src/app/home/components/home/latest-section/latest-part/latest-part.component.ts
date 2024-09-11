import { Component, Input } from "@angular/core";
import { IRecipes } from "../../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-latest-part",
    templateUrl: "./latest-part.component.html",
    styleUrl: "./latest-part.component.css",
})
export class LatestPartComponent {
    @Input() latest: IRecipes;
}
