import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(private router: Router) {}

    getJwtToken(): string {
        return (localStorage.getItem("token") ?? "").trim();
    }

    getJwtData(): any {
        let token = this.getJwtToken();
        let jwtHelper = new JwtHelperService();

        return jwtHelper.decodeToken(token);
    }

    setJwtToken(token: string): void {
        localStorage.setItem("token", token);
    }

    isLoggedIn(): boolean {
        return !!this.getJwtToken();
    }

    logout(): void {
        localStorage.removeItem("token");
        this.router.navigateByUrl("/home");
    }
}
