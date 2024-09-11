import { Component, Input } from "@angular/core";

@Component({
    selector: "app-base-half-hero",
    templateUrl: "./base-half-hero.component.html",
    styleUrl: "./base-half-hero.component.css",
})
export class BaseHalfHeroComponent {
    @Input() page: string;
    @Input() title: string;
}
