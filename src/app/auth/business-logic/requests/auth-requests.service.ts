import { Injectable } from "@angular/core";
import { AuthApiService } from "../api/auth-api.service";
import { Observable } from "rxjs";
import { IAuth, IAuthRegister, IAuthRes } from "../../interfaces/i-auth";

@Injectable({
    providedIn: "root",
})
export class AuthRequestsService {
    constructor(private apiService: AuthApiService) {}

    login(data: IAuth): Observable<IAuthRes> {
        return this.apiService.login(data);
    }

    register(data: IAuthRegister): Observable<any> {
        return this.apiService.register(data);
    }
}
