import { Component, OnInit } from "@angular/core";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";
import { ProfileApiService } from "../../business-logic/api/profile-api.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.css",
})
export class ProfileComponent implements OnInit {
    constructor(private profileApiService: ProfileApiService) {}

    user: any = {
        id: 1,
        firstName: "Eric",
        lastName: "Cartman",
        email: "cartman@gmail.com",
    };
    mode: string = "add";

    rTitle = "";
    rMinutes = 0;
    rServings = 0;
    rImage = {};
    rSummary = "";
    rDishTypes: string[] = [];
    rIngredients = "";
    rAnalyzedInstructions = "";

    onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.rImage = input.files[0];
            console.log("Selected file:", this.rImage);
        }
    }

    recipes: IRecipes[] = [];
    ngOnInit(): void {
        this.profileApiService.getRecipes().subscribe((data) => {
            this.recipes = data;
        });
    }

    resetForm() {
        this.rTitle = "";
        this.rMinutes = 0;
        this.rServings = 0;
        this.rImage = {};
        this.rSummary = "";
        this.rDishTypes = [];
        this.rIngredients = "";
        this.rAnalyzedInstructions = "";
    }

    onEdit(currentRecipe: IRecipes): void {
        this.rTitle = currentRecipe.title;
        this.rMinutes = currentRecipe.readyInMinutes;
        this.rServings = currentRecipe.servings;
        this.rImage = currentRecipe.image;
        this.rSummary = currentRecipe.summary;
        this.rDishTypes = currentRecipe.dishTypes;
        this.rIngredients = currentRecipe.extendedIngredients.map((i) => i.original).join(" | ");
    }

    editRecipe() {}

    addRecipe() {}

    submitForm() {}
}
