import { Component, Input, OnInit } from "@angular/core";
import { DishTypesService } from "../../../../shared/business-logic/dish-types-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-sidebar-section",
    templateUrl: "./sidebar-section.component.html",
    styleUrl: "./sidebar-section.component.css",
})
export class SidebarSectionComponent implements OnInit {
    constructor(private dishTypesService: DishTypesService, private router: Router, private route: ActivatedRoute) {}

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
        this.route.queryParamMap.subscribe((params) => {
            this.sidebarSearchInput = params.get("search") || "";
            this.searchActive = !!this.sidebarSearchInput;
        });
    }

    sidebarSearchInput: string = "";
    searchActive: boolean = false;

    searchOnChange(): void {
        this.searchActive = false;
    }

    searchRecipes(): void {
        this.router.navigate(["/recipes"], { queryParams: { search: this.sidebarSearchInput } });
    }

    resetSearch(): void {
        this.sidebarSearchInput = "";
        this.router.navigate(["/recipes"]);
    }
}
