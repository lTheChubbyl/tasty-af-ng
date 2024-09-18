import { Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-dialog-delete-profile",
    templateUrl: "./dialog-delete-profile.component.html",
    styleUrl: "./dialog-delete-profile.component.css",
})
export class DialogDeleteProfileComponent {
    readonly dialogRef = inject(MatDialogRef<DialogDeleteProfileComponent>);

    onNoClick(): void {
        this.dialogRef.close();
    }
}
