import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ResetComponent } from './reset.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RecoveryComponent } from './recovery.component';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetComponent,
    RecoveryComponent
  ],

  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,

    RouterModule.forChild([
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent},
      { path:'reset',component:ResetComponent},
      { path:'recovery',component:RecoveryComponent}

    ])
  ],
  providers: [],
  entryComponents: [],

})
export class LoginModule {

}
