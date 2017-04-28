import { NgModule } from '@angular/core';

import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@NgModule({
    imports: [AlertService,AuthenticationService,UserService],
    exports: [AlertService,AuthenticationService,UserService],
    declarations: [],
    providers: [UserService],
})
export class AuthModule { }

