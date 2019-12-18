import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';


@NgModule({
  declarations: [
    InboxComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InboxComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class InboxModule {

}
