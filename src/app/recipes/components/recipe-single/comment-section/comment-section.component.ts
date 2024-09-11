import { Component } from "@angular/core";

@Component({
    selector: "app-comment-section",
    templateUrl: "./comment-section.component.html",
    styleUrl: "./comment-section.component.css",
})
export class CommentSectionComponent {
    commentsArray: any = [];
    authData: any = localStorage.getItem("token");
    formIsValid: boolean = true;
    text: string;
    author: string = "Eric Cartman";
    email: string = "cartman@gmail.com";

    submitComment(): void {}
    deleteComment(): void {}
}
