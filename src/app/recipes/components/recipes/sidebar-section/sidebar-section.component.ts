import { Component } from "@angular/core";

@Component({
    selector: "app-sidebar-section",
    templateUrl: "./sidebar-section.component.html",
    styleUrl: "./sidebar-section.component.css",
})
export class SidebarSectionComponent {
    categoryArray: any = [
        { key: "breakfast", value: "Breakfast" },
        { key: "main-course", value: "Main Course" },
        { key: "dessert", value: "Dessert" },
        { key: "drink", value: "Drink" },
    ];

    sidebarSearchInput: string = "";

    searchRecipes(): void {}
    resetSearch(): void {}
}
