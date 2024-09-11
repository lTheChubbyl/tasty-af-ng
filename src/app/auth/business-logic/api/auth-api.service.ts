import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuth, IAuthRegister, IAuthRegisterRes, IAuthRes } from "../../interfaces/i-auth";

@Injectable({
    providedIn: "root",
})
export class AuthApiService {
    constructor(public http: HttpClient) {}

    private baseUrl = "assets/jsons";

    login(data: IAuth): Observable<IAuthRes> {
        console.log(data);
        return this.http.get<IAuthRes>(`${this.baseUrl}/auth.json`);
        // return this.http.post<IAuthRes>(`${this.baseUrl}/auth.json`, data);
    }

    register(data: IAuthRegister): Observable<IAuthRegisterRes> {
        console.log(data);
        return this.http.get<IAuthRegisterRes>(`${this.baseUrl}/users.json`);
        // return this.http.post<IAuthRegisterRes>(`${this.baseUrl}/users.json`, data);
    }
}
