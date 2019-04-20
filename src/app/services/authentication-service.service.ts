import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationServiceService {
    constructor(private http: HttpClient) { }

    public url = `http://localhost:3000/`;

    public login(data: any) {
        console.log(data);
        return this.http.post(`${this.url}login/authenticate`, data);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
