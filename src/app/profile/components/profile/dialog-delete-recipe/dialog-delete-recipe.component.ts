import { Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-dialog-delete-recipe",
    templateUrl: "./dialog-delete-recipe.component.html",
    styleUrl: "./dialog-delete-recipe.component.css",
})
export class DialogDeleteRecipeComponent {
    readonly dialogRef = inject(MatDialogRef<DialogDeleteRecipeComponent>);

    onNoClick(): void {
        this.dialogRef.close();
    }
}
