import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class UserService {

    userObservable: Observable<User>;

    constructor(
        private http: HttpClient
    ) {
        this.userObservable = new Observable<User>();
    }

    getAll() {
        return this.http.get<User[]>(`${environment.api.auth.url}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.api.auth.url}/users/${id}`);
    }

    delete(id: number) {
        return this.http.delete(`${environment.api.auth.url}/users/${id}`);
    }

    update(user: any) {
        return this.http.put(`${environment.api.auth.url}/users/${user.id}`, user);
    }
}
