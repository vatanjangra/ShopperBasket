import { Injectable,Component } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {baseUrl} from '../app.component'
 import { AuthUser } from '../models/user';
@Component({
    selector: 'my-app',
    providers: [AuthenticationService]
})
export class AuthenticationService {
    
    constructor(private http: Http) { }
 
    login(user:AuthUser) {
      
        // return this.http.post(baseUrl + '/login', JSON.stringify({ username: username, password: password }))
    
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });

        return this.http.post(baseUrl + '/login', user, this.jwt()).map((response: Response) => response.json());
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}