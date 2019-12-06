import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';


@NgModule({
  declarations: [
    SampleComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SampleComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class SampleModule {

}
