import { Component } from "@angular/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { AuthRequestsService } from "../../business-logic/requests/auth-requests.service";
import { IAuthRegister } from "../../interfaces/i-auth";
import { Router } from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.css",
})
export class RegisterComponent {
    constructor(private authRequestsService: AuthRequestsService, private router: Router) {}

    firstNameFormControl = new FormControl("", [Validators.required, Validators.pattern(`^[a-zA-ZÀ-ÿ\s'-]+$`)]);
    lastNameFormControl = new FormControl("", [Validators.required, Validators.pattern(`^[a-zA-ZÀ-ÿ\s'-]+$`)]);
    emailFormControl = new FormControl("", [Validators.required, Validators.email]);
    usernameFormControl = new FormControl("", [Validators.required, Validators.pattern(`^[a-zA-Z0-9_.]{3,20}$`)]);
    passwordFormControl = new FormControl("", [
        Validators.required,
        Validators.pattern(`^(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}`),
    ]);
    matcher = new MyErrorStateMatcher();

    formIsValid: boolean = true;

    submitForm() {
        this.formIsValid =
            this.firstNameFormControl.valid &&
            this.lastNameFormControl.valid &&
            this.emailFormControl.valid &&
            this.usernameFormControl.valid &&
            this.passwordFormControl.valid;

        if (this.formIsValid) {
            const newUser: IAuthRegister = {
                firstName: this.firstNameFormControl.value ?? "",
                lastName: this.lastNameFormControl.value ?? "",
                email: this.emailFormControl.value ?? "",
                username: this.usernameFormControl.value ?? "",
                password: this.passwordFormControl.value ?? "",
            };

            this.authRequestsService.register(newUser).subscribe({
                next: (res) => {
                    console.log(res);
                    this.router.navigateByUrl("/auth");
                },
                error: (err) => {
                    console.log(err);
                },
            });
        }
    }
}
