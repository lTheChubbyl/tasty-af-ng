import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuth, IAuthRegister, IAuthRegisterRes, IAuthRes } from "../../interfaces/i-auth";

@Injectable({
    providedIn: "root",
})
export class AuthApiService {
    constructor(public http: HttpClient) {}

    private baseUrl = "https://localhost:7165/api/";

    login(data: IAuth): Observable<IAuthRes> {
        console.log(data);
        return this.http.post<IAuthRes>(`${this.baseUrl}Login/login`, data);
    }

    register(data: IAuthRegister): Observable<IAuthRegisterRes> {
        console.log(data);
        return this.http.post<IAuthRegisterRes>(`${this.baseUrl}User/register`, data);
    }
}
