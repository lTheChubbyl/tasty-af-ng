import { Component, Inject, inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MyErrorStateMatcher } from "../profile.component";
import { DishTypesService } from "../../../../shared/business-logic/dish-types-api.service";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { IRecipes } from "../../../../recipes/interfaces/i-recipes";

@Component({
    selector: "app-dialog-edit-recipe",
    templateUrl: "./dialog-edit-recipe.component.html",
    styleUrl: "./dialog-edit-recipe.component.css",
})
export class DialogEditRecipeComponent {
    constructor(private dishTypesService: DishTypesService, @Inject(MAT_DIALOG_DATA) public data: any) {}

    readonly dialogRef = inject(MatDialogRef<DialogEditRecipeComponent>);

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

    onChbChange($event: MatCheckboxChange): void {
        const dishTypeId = $event.source.value;

        if ($event.checked) {
            this.dishTypes.push(dishTypeId);
        } else {
            const index = this.dishTypes.indexOf(dishTypeId);
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
                this.dishTypes = this.data.dishTypeNames
                    .map((name: string) => this.categoryArray.find((category: any) => category.name === name)?.id)
                    .filter((id: number | undefined) => id !== undefined);
            },
            error: (err) => {
                console.log(err);
            },
        });

        this.onEdit(this.data);
    }

    markCheckedDishTypes(): void {
        const currentDishTypeIds = this.data.dishTypes;
        this.categoryArray.forEach((dishType: any) => {
            if (currentDishTypeIds.includes(dishType.id)) {
                this.dishTypes.push(dishType.id);
            }
        });
    }

    onEdit(currentRecipe: IRecipes): void {
        this.title.setValue(currentRecipe.title);
        this.minutes.setValue(currentRecipe.readyInMinutes.toString());
        this.servings.setValue(currentRecipe.servings.toString());
        this.image.name = currentRecipe.image;
        this.summary.setValue(currentRecipe.summary);
        this.dishTypes;
        this.ingredients.setValue(currentRecipe.extendedIngredients.map((i) => i).join(" | "));
        this.analyzedInstructions.setValue(currentRecipe.analyzedInstructions.map((i) => i).join(" | "));
    }

    onFileChange(event: any) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.image = file;
        }
    }

    submitEditRecipe() {
        if (
            this.title.invalid ||
            this.minutes.invalid ||
            this.servings.invalid ||
            !this.image.name ||
            this.summary.invalid ||
            this.dishTypes.length === 0 ||
            this.ingredients.invalid ||
            this.analyzedInstructions.invalid
        ) {
            this.formIsValid = false;
            return;
        }

        const newData: any = {
            id: this.data.id,
            title: (this.title.value ?? "").trim(),
            readyInMinutes: Number(this.minutes.value),
            servings: Number(this.servings.value),
            image: this.image.name,
            summary: this.summary.value,
            dishTypeIds: this.dishTypes,
            extendedIngredients: this.ingredients.value?.split("|").map((i) => i.trim()),
            analyzedInstructions: this.analyzedInstructions.value?.split("|").map((i) => i.trim()),
        };
        this.dialogRef.close(newData);
    }
}
