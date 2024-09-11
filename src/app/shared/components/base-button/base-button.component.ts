import { Component, Input } from "@angular/core";

@Component({
    selector: "app-base-button",
    templateUrl: "./base-button.component.html",
    styleUrl: "./base-button.component.css",
})
export class BaseButtonComponent {
    @Input() link: string;
    @Input() color: string;
    @Input() text: string;
}
