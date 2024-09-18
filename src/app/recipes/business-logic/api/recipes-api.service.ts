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

    getRecipeComments(id: number): Observable<any[]> {
        return this.http.get<any[]>(`https://localhost:7165/api/Comments/${id}`);
    }

    addRecipeComment(comment: any): Observable<any> {
        return this.http.post<any>(`https://localhost:7165/api/Comments`, comment);
    }

    deleteRecipeComment(id: number): Observable<any> {
        return this.http.delete<any>(`https://localhost:7165/api/Comments/${id}`);
    }
}
