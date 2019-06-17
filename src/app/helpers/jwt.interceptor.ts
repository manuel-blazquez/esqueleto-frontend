import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/index.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentToken = this.authenticationService.currentTokenValue;

        if (currentToken && currentToken.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentToken.tokenType} ${currentToken.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}