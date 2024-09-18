import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRecipes } from "../../../recipes/interfaces/i-recipes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ProfileApiService {
    private baseUrl = "https://localhost:7165/api/";

    constructor(private http: HttpClient) {}

    token = localStorage.getItem("token");

    getProfileInfo(): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.get<any>(`${this.baseUrl}User/profile`, { headers });
    }

    updateProfile(data: any): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.put<any>(`${this.baseUrl}User/update-profile`, data, { headers });
    }

    deleteProfile(): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.delete<any>(`${this.baseUrl}User/delete-profile`, { headers });
    }

    getUserRecipes(userId: string): Observable<IRecipes[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.get<IRecipes[]>(`${this.baseUrl}Recipes/user/${userId}`, { headers });
    }

    addRecipe(data: any): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.post<any>(`${this.baseUrl}Recipes`, data, { headers });
    }

    updateUserRecipe(data: any): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.put<any>(`${this.baseUrl}Recipes/${data.id}`, data, { headers });
    }

    deleteUserRecipe(recipeId: number): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token ?? ""}`,
        });
        return this.http.delete<any>(`${this.baseUrl}Recipes/${recipeId}`, { headers });
    }
}
