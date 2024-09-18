import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IAuth } from "../../interfaces/i-auth";
import { AuthRequestsService } from "../../business-logic/requests/auth-requests.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../shared/business-logic/auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrl: "./auth.component.css",
})
export class AuthComponent {
    constructor(
        private router: Router,
        private requestsService: AuthRequestsService,
        private authService: AuthService
    ) {}

    form: any = new FormGroup({
        username: new FormControl("", [Validators.required, Validators.pattern(`^[a-zA-Z0-9_.]{3,20}$`)]),
        password: new FormControl("", [
            Validators.required,
            Validators.pattern(`^(?=.*?[A-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`),
        ]),
    });

    hide: boolean = true;
    formIsValid: boolean = true;

    runValidation(): void {
        Object.keys(this.form.controls).forEach((ctrlName) => {
            this.form.get(ctrlName).markAsTouched();
        });
    }

    submitForm() {
        this.runValidation();
        if (this.form.valid) {
            const data: IAuth = this.getData();

            this.requestsService.login(data).subscribe({
                next: (res) => {
                    console.log(res);
                    this.authService.setJwtToken(res.token);
                    this.router.navigateByUrl("/");
                },
                error: (err) => {
                    console.log(err);
                    this.formIsValid = false;
                },
            });
        } else {
            this.formIsValid = false;
        }
    }

    getData(): IAuth {
        let FormValue = this.form.getRawValue();
        return {
            userName: FormValue.username,
            password: FormValue.password,
        };
    }
}
