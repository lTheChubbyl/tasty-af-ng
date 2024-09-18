import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "../../../shared/business-logic/auth.service";
import { DishTypesService } from "../../../shared/business-logic/dish-types-api.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    categoryArray: any;
    searchOpened: boolean = false;
    searchTerm: string = "";
    isOverlayOpened: boolean = false;
    loggedIn: boolean = false;

    constructor(private authService: AuthService, private router: Router, private dishTypesService: DishTypesService) {}

    ngOnInit(): void {
        this.dishTypesService.getDishTypes().subscribe({
            next: (res) => {
                this.categoryArray = res;
            },
            error: (err) => {
                console.log(err);
            },
        });

        this.loggedIn = this.authService.isLoggedIn();

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.loggedIn = this.authService.isLoggedIn();
            }
        });
    }

    submitSearch(): void {
        if (this.searchTerm.trim() !== "") {
            if (this.router.url !== "/recipes") {
                this.router.navigate(["/recipes"], {
                    queryParams: { search: this.searchTerm },
                });
            } else {
                this.router.navigate([], {
                    queryParams: { search: this.searchTerm },
                    queryParamsHandling: "merge",
                });
            }
            this.searchTerm = "";
            this.searchOpened = false;
        }
    }

    logout(): void {
        this.authService.logout();
    }
}
