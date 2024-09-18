import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";
import { ProfileRequestsService } from "../../business-logic/requests/profile-requests.service";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogDeleteProfileComponent } from "./dialog-delete-profile/dialog-delete-profile.component";
import { AuthService } from "../../../shared/business-logic/auth.service";
import { DialogNewRecipeComponent } from "./dialog-new-recipe/dialog-new-recipe.component";
import { DialogEditRecipeComponent } from "./dialog-edit-recipe/dialog-edit-recipe.component";
import { DialogDeleteRecipeComponent } from "./dialog-delete-recipe/dialog-delete-recipe.component";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
    constructor(private profileApiService: ProfileRequestsService, private authService: AuthService) {}

    private cdr = inject(ChangeDetectorRef);

    firstName = new FormControl("", Validators.pattern(`^[a-zA-Z]{3,20}$`));
    lastName = new FormControl("", Validators.pattern(`^[a-zA-Z]{3,20}$`));
    username = new FormControl("", Validators.pattern(`^[a-zA-Z0-9_.]{3,20}$`));
    email = new FormControl("", Validators.email);
    newPassword = new FormControl("", Validators.pattern(`^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`));
    confirmPassword = new FormControl("", Validators.pattern(`^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`));
    matcher = new MyErrorStateMatcher();

    hide: boolean = true;

    userId: string = "";
    recipes: IRecipes[] = [];
    ngOnInit(): void {
        this.profileApiService.getProfileInfo().subscribe({
            next: (res) => {
                this.userId = res.userId;
                this.firstName.setValue(res.firstName);
                this.lastName.setValue(res.lastName);
                this.username.setValue(res.userName);
                this.email.setValue(res.email);

                this.fetchUserRecipes();
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    fetchUserRecipes(): void {
        this.profileApiService.getUserRecipes(this.userId).subscribe({
            next: (recipeRes) => {
                this.recipes = recipeRes;

                this.cdr.markForCheck();
            },
            error: (recipeErr) => {
                console.log(recipeErr);
            },
        });
    }

    formIsValid: boolean = true;

    submitForm(): void {
        if (
            this.firstName.valid &&
            this.lastName.valid &&
            this.username.valid &&
            this.email.valid &&
            this.newPassword.valid
        ) {
            this.profileApiService
                .updateProfile({
                    firstName: this.firstName.value,
                    lastName: this.lastName.value,
                    userName: this.username.value,
                    email: this.email.value,
                    newPassword: this.newPassword.value,
                })
                .subscribe({
                    next: (res) => {
                        this.newPassword.setValue("");
                        this.confirmPassword.setValue("");
                    },
                    error: (err) => {
                        console.log(err);
                    },
                });
        } else {
            this.formIsValid = false;
        }
    }

    readonly dialog = inject(MatDialog);
    openDeleteDialog(): void {
        const dialogRef = this.dialog.open(DialogDeleteProfileComponent);

        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.deleteProfile();
            }
        });
    }
    deleteProfile() {
        this.profileApiService.deleteProfile().subscribe({
            next: (res) => {
                this.authService.logout();
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    openNewRecipeDialog(): void {
        const dialogRef = this.dialog.open(DialogNewRecipeComponent);

        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                result = {
                    ...result,
                    authorId: this.userId,
                };
                this.profileApiService.addRecipe(result).subscribe({
                    next: (res) => {
                        console.log("Successfully added recipe");
                        this.fetchUserRecipes();
                    },
                    error: (err) => {
                        console.log(err);
                    },
                });
            }
        });
    }

    openEditRecipeDialog(recipe: IRecipes): void {
        const dialogRef = this.dialog.open(DialogEditRecipeComponent, {
            data: recipe,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.profileApiService.updateUserRecipe(result).subscribe({
                    next: (res) => {
                        console.log("Successfully updated recipe");
                        this.fetchUserRecipes();
                    },
                    error: (err) => {
                        console.log(err);
                    },
                });
            }
        });
    }

    openDeleteRecipeDialog(recipe: IRecipes): void {
        const dialogRef = this.dialog.open(DialogDeleteRecipeComponent);

        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.profileApiService.deleteUserRecipe(recipe.id).subscribe({
                    next: (res) => {
                        console.log("Successfully deleted recipe");
                        this.fetchUserRecipes();
                    },
                    error: (err) => {
                        console.log(err);
                    },
                });
            }
        });
    }
}
