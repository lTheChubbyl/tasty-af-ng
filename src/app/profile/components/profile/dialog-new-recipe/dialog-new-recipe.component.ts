import { Component, inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MyErrorStateMatcher } from "../profile.component";
import { DishTypesService } from "../../../../shared/business-logic/dish-types-api.service";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
    selector: "app-dialog-new-recipe",
    templateUrl: "./dialog-new-recipe.component.html",
    styleUrl: "./dialog-new-recipe.component.css",
})
export class DialogNewRecipeComponent {
    constructor(private dishTypesService: DishTypesService) {}

    readonly dialogRef = inject(MatDialogRef<DialogNewRecipeComponent>);

    onNoClick(): void {
        this.dialogRef.close();
    }
    matcher = new MyErrorStateMatcher();

    title = new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]{3,50}$/)]);
    minutes = new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]);
    servings = new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]);
    image: any = {};
    summary = new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\s,|()<>:\/".\-!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/),
    ]);
    dishTypes: any = [];
    ingredients = new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\s,|()<>:\/".\-!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/),
    ]);
    analyzedInstructions = new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\s,|()<>:\/".\-!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/),
    ]);

    formIsValid: boolean = true;

    onChbChange($event: MatCheckboxChange) {
        if ($event.checked) {
            this.dishTypes.push($event.source.value);
        } else {
            const index = this.dishTypes.indexOf($event.source.value);
            if (index > -1) {
                this.dishTypes.splice(index, 1);
            }
        }
    }

    categoryArray: any;
    ngOnInit(): void {
        this.dishTypesService.getDishTypes().subscribe({
            next: (res) => {
                this.categoryArray = res;
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    onFileChange(event: any) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.image = file;
        }
    }

    submitAddRecipe() {
        if (
            this.title.invalid ||
            this.minutes.invalid ||
            this.servings.invalid ||
            this.image == null ||
            this.summary.invalid ||
            this.dishTypes.length === 0 ||
            this.ingredients.invalid ||
            this.analyzedInstructions.invalid
        ) {
            this.formIsValid = false;
            return;
        }

        const data: any = {
            title: (this.title.value ?? "").trim(),
            readyInMinutes: Number(this.minutes.value),
            servings: Number(this.servings.value),
            image: this.image.name,
            summary: this.summary.value,
            dishTypeIds: this.dishTypes,
            extendedIngredients: this.ingredients.value?.split("|").map((i) => i.trim()),
            analyzedInstructions: this.analyzedInstructions.value?.split("|").map((i) => i.trim()),
        };
        this.dialogRef.close(data);
    }
}
