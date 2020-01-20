import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSharedModule } from 'src/app/shared/mat.module';




@NgModule({
  declarations: [
    ProfileComponent,
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ProfileModule {

}
