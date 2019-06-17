import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, Token } from '../models/index.models';
import { URL_SERVICES } from '../config/config';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private currentTokenSubject: BehaviorSubject<Token>;
    public currentToken: Observable<Token>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentTokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentToken')));
        this.currentToken = this.currentTokenSubject.asObservable();
        
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentTokenValue(): Token {
        return this.currentTokenSubject.value;
    }

    login(username: string, password: string) {
        
        return this.http.post<any>( URL_SERVICES + '/auth/login', { email: username, password: password })
            .pipe(map(response => {
                // login successful if there's a jwt token in the response
                if (response.user && response.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.user));
                    localStorage.setItem('currentToken', JSON.stringify(response.token));
                    this.currentUserSubject.next(response.user);
                }

                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}