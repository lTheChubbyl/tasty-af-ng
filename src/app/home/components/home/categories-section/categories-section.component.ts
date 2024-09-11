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
            link: "/recipes?category=1",
            img: "breakfast.jpg",
            name: "Breakfast",
        },
        {
            id: 2,
            link: "/recipes?category=2",
            img: "lunch.jpg",
            name: "Lunch",
        },
        {
            id: 3,
            link: "/recipes?category=3",
            img: "dinner.jpg",
            name: "Dinner",
        },
        {
            id: 4,
            link: "/recipes?category=4",
            img: "dessert.jpg",
            name: "Dessert",
        },
    ];
}
