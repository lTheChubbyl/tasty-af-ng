import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.css",
})
export class CounterComponent implements OnInit {
    @Input() notCounter: boolean = false;
    @Input() endCount: number = 0;
    @Input() text: string = "";
    formattedText: string;

    count = 0;

    ngOnInit() {
        this.formattedText = this.text.replace(" ", " </br>");
        setInterval(() => {
            if (this.count < this.endCount) {
                if (!this.notCounter) {
                    this.count++;
                }
            }
        }, 100);
    }
}
