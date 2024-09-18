import { Injectable } from "@angular/core";
import { ProfileApiService } from "../api/profile-api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ProfileRequestsService {
    constructor(private apiService: ProfileApiService) {}

    getProfileInfo(): Observable<any> {
        return this.apiService.getProfileInfo();
    }

    updateProfile(data: any): Observable<any> {
        return this.apiService.updateProfile(data);
    }

    deleteProfile(): Observable<any> {
        return this.apiService.deleteProfile();
    }

    getUserRecipes(userId: string): Observable<any> {
        return this.apiService.getUserRecipes(userId);
    }

    addRecipe(data: any): Observable<any> {
        return this.apiService.addRecipe(data);
    }

    updateUserRecipe(data: any): Observable<any> {
        return this.apiService.updateUserRecipe(data);
    }

    deleteUserRecipe(recipeId: number): Observable<any> {
        return this.apiService.deleteUserRecipe(recipeId);
    }
}
