import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./business-logic/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, _next: HttpHandler): Observable<HttpEvent<any>> {
        const modifyRequest = this.prepareRequest(req);

        return _next.handle(modifyRequest);
    }

    prepareRequest(req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({
            setHeaders: {
                Authorization: "Bearer" + this.authService.getJwtToken(),
            },
        });
    }
}
