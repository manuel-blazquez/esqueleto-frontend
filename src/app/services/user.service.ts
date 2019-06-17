import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/index.models';
import { URL_SERVICES } from '../config/config';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(URL_SERVICES + '/users');
    }

    getById(id: string) {
        return this.http.get<User>(URL_SERVICES + `/users/${id}`);
    }

    deleteById(id: string) {
        return this.http.delete<User>(URL_SERVICES + `/users/${id}`);
    }
}
