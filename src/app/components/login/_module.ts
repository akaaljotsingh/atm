import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ResetComponent } from './reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent},
      { path:'reset',component:ResetComponent}
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class LoginModule {

}