import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'; 
import {UserService } from './services/user.service';
import {AlertService} from './services/alert.service';

export const baseUrl = 'http://10.48.27.195:4000';
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [AuthenticationService,UserService,AlertService]
})
 
export class AppComponent { }