import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ProfileApiService {
    constructor(public http: HttpClient) {}

    getRecipes(): Observable<IRecipes[]> {
        return this.http.get<IRecipes[]>("assets/jsons/user-recipes.json");
    }

    addUserRecipe(recipe: IRecipes): Observable<IRecipes> {
        return this.http.post<IRecipes>("assets/jsons/user-recipes.json", recipe);
    }
}
