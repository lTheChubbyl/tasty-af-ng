import { Component, Input } from "@angular/core";

@Component({
    selector: "[app-base-sidebar-card]",
    templateUrl: "./base-sidebar-card.component.html",
    styleUrl: "./base-sidebar-card.component.css",
})
export class BaseSidebarCardComponent {
    @Input() title: string;
}
