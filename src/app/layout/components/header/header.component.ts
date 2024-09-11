import { Component } from "@angular/core";
import { AuthService } from "../../../shared/business-logic/auth.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {}

    categoryArray: any = [
        { key: "breakfast", value: "Breakfast" },
        { key: "main-course", value: "Main Course" },
        { key: "dessert", value: "Dessert" },
        { key: "drink", value: "Drink" },
    ];

    searchOpened: boolean = false;
    isOverlayOpened: boolean = false;
    loggedIn: boolean = false;

    ngOnInit(): void {
        this.loggedIn = this.authService.isLoggedIn();

        this.router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.loggedIn = this.authService.isLoggedIn();
            }
        });
    }

    logout(): void {
        this.authService.logout();
    }
}
