import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IRecipes } from "../../../interfaces/i-recipes";

@Component({
    selector: "app-recipe-preview",
    templateUrl: "./recipe-preview.component.html",
    styleUrl: "./recipe-preview.component.css",
})
export class RecipePreviewComponent {
    @Input() recipe: IRecipes;
    @Input() isUserRecipe?: boolean;

    @Output() editRecipe = new EventEmitter<IRecipes>();
    @Output() deleteRecipe = new EventEmitter<IRecipes>();
}
