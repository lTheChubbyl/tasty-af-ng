import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecipes } from "../../interfaces/i-recipes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class RecipesApiService {
    constructor(public http: HttpClient) {}

    getRecipes(): Observable<IRecipes[]> {
        return this.http.get<IRecipes[]>("assets/jsons/recipes.json");
    }
}
