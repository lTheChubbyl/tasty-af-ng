import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class DishTypesService {
    constructor(public http: HttpClient) {}

    getDishTypes(): Observable<any> {
        return this.http.get<any>("https://localhost:7165/api/DishTypes");
    }
}
