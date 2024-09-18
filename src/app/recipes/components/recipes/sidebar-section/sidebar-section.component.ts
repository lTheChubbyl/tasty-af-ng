import { Component, OnInit } from "@angular/core";
import { DishTypesService } from "../../../../shared/business-logic/dish-types-api.service";

@Component({
    selector: "app-sidebar-section",
    templateUrl: "./sidebar-section.component.html",
    styleUrl: "./sidebar-section.component.css",
})
export class SidebarSectionComponent implements OnInit {
    constructor(private dishTypesService: DishTypesService) {}

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
    }

    sidebarSearchInput: string = "";

    searchRecipes(): void {}
    resetSearch(): void {}
}
