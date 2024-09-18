import { Component } from "@angular/core";
import { ProfileRequestsService } from "../../../../profile/business-logic/requests/profile-requests.service";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-comment-section",
    templateUrl: "./comment-section.component.html",
    styleUrl: "./comment-section.component.css",
})
export class CommentSectionComponent {
    constructor(private profileService: ProfileRequestsService) {}

    commentsArray: any = [];
    authData: any = localStorage.getItem("token");
    formIsValid: boolean = true;
    disabled: boolean = true;
    author = new FormControl({ value: "", disabled: this.disabled });
    email = new FormControl({ value: "", disabled: this.disabled });
    comment = new FormControl("");

    ngOnInit(): void {
        this.profileService.getProfileInfo().subscribe({
            next: (res) => {
                this.author.setValue(res.firstName + " " + res.lastName);
                this.email.setValue(res.email);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    submitComment(): void {
        if (this.comment.value == "") {
            this.formIsValid = false;
        } else {
        }
    }
    deleteComment(): void {}
}
