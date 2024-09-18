import { Injectable } from "@angular/core";
import { RecipesApiService } from "../api/recipes-api.service";
import { Observable } from "rxjs";
import { IRecipes } from "../../interfaces/i-recipes";

@Injectable({
    providedIn: "root",
})
export class RecipesRequestsService {
    constructor(private apiService: RecipesApiService) {}

    getRecipes(): Observable<IRecipes[]> {
        return this.apiService.getRecipes();
    }

    getRecipeById(id: number): Observable<IRecipes> {
        return this.apiService.getRecipeById(id);
    }

    getRecipesByCategory(category: string): Observable<IRecipes[]> {
        return this.apiService.getRecipesByCategory(category);
    }

    getRecipesBySearch(searchTerm: string): Observable<IRecipes[]> {
        return this.apiService.getRecipesBySearch(searchTerm);
    }

    getRecipeComments(id: number): Observable<any[]> {
        return this.apiService.getRecipeComments(id);
    }

    addComment(comment: any): Observable<any> {
        return this.apiService.addRecipeComment(comment);
    }

    deleteComment(id: number): Observable<any> {
        return this.apiService.deleteRecipeComment(id);
    }
}
