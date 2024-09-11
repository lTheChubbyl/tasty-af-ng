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
}
