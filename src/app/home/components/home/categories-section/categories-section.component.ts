import { Component } from "@angular/core";

@Component({
    selector: "app-categories-section",
    templateUrl: "./categories-section.component.html",
    styleUrl: "./categories-section.component.css",
})
export class CategoriesSectionComponent {
    categoryList: any = [
        {
            id: 1,
            path: "/recipes",
            queryParams: { category: 1 },
            img: "breakfast.jpg",
            name: "Breakfast",
        },
        {
            id: 2,
            path: "/recipes",
            queryParams: { category: 6 },
            img: "lunch.jpg",
            name: "Lunch",
        },
        {
            id: 3,
            path: "/recipes",
            queryParams: { category: 7 },
            img: "dinner.jpg",
            name: "Dinner",
        },
        {
            id: 4,
            path: "/recipes",
            queryParams: { category: 3 },
            img: "dessert.jpg",
            name: "Dessert",
        },
    ];
}
