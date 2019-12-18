import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';


@NgModule({
  declarations: [
    NotificationComponent,
  ],

  imports: [
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
