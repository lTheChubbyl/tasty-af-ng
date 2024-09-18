import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecipes } from "../../interfaces/i-recipes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class RecipesApiService {
    constructor(public http: HttpClient) {}

    private baseUrl = "https://localhost:7165/api/Recipes";

    getRecipes(): Observable<IRecipes[]> {
        return this.http.get<IRecipes[]>(this.baseUrl);
    }

    getRecipeById(id: number): Observable<IRecipes> {
        return this.http.get<IRecipes>(`${this.baseUrl}/${id}`);
    }

    getRecipesByCategory(category: string): Observable<IRecipes[]> {
        return this.http.get<IRecipes[]>(`${this.baseUrl}/dishType/${category}`);
    }

    getRecipesBySearch(searchTerm: string): Observable<IRecipes[]> {
        console.log(`Requesting recipes with search term: ${searchTerm}`);
        const params = new HttpParams().set("searchTerm", searchTerm);
        return this.http.get<IRecipes[]>(`${this.baseUrl}/search`, { params });
    }

    // addRecipeComment(id: number, comment: string): Observable<IRecipes> {
    //     return this.http.post<IRecipes>(`${this.baseUrl}/${id}/comments`, comment);
    // }
}
