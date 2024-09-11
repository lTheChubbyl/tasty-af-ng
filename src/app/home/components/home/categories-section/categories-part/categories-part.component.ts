import { Component, Input } from "@angular/core";

@Component({
    selector: "app-categories-part",
    templateUrl: "./categories-part.component.html",
    styleUrl: "./categories-part.component.css",
})
export class CategoriesPartComponent {
    @Input() category: any;
}
