import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { ProfileRequestsService } from "../../../../profile/business-logic/requests/profile-requests.service";
import { FormControl } from "@angular/forms";
import { RecipesRequestsService } from "../../../business-logic/requests/recipes-requests.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-comment-section",
    templateUrl: "./comment-section.component.html",
    styleUrl: "./comment-section.component.css",
})
export class CommentSectionComponent {
    constructor(
        private profileService: ProfileRequestsService,
        private recipesService: RecipesRequestsService,
        private route: ActivatedRoute
    ) {}

    private cdr = inject(ChangeDetectorRef);

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

                this.authorId = res.userId;
            },
            error: (err) => {
                console.log(err);
            },
        });
        this.recipeId = Number(this.route.snapshot.paramMap.get("id"));
        this.getComments();
    }

    authorId: string = "";
    recipeId: number = 0;
    submitComment(): void {
        if (this.comment.value == "") {
            this.formIsValid = false;
        } else {
            this.recipesService
                .addComment({
                    recipeId: this.recipeId,
                    authorId: this.authorId,
                    content: this.comment.value,
                    authorName: this.author.value,
                })
                .subscribe({
                    next: (res) => {
                        console.log("Comment added successfully");
                        this.getComments();
                        this.comment.setValue("");
                    },
                    error: (err) => {
                        console.log(err);
                    },
                });
        }
    }

    commentsArray: any = [];

    getComments(): void {
        this.recipesService.getRecipeComments(this.recipeId).subscribe({
            next: (res) => {
                this.commentsArray = res;
                this.cdr.markForCheck();
            },
            error: (err) => {
                if (err.status == 404) {
                    this.commentsArray = [];
                    this.cdr.markForCheck();
                }
                console.log(err);
            },
        });
    }

    deleteComment(commentId: number): void {
        this.recipesService.deleteComment(commentId).subscribe({
            next: (res) => {
                this.getComments();
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
