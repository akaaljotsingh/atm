import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NotificationComponent,
  ],

  imports: [
    MatButtonModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NotificationComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class NotificationModule  {

}
