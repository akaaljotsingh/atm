import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { MatSharedModule } from 'src/app/shared/mat.module';


@NgModule({
  declarations: [
    ApplyComponent,
  ],

  imports: [
    CommonModule,
    MatSharedModule,
    RouterModule.forChild([
      { path: '', component: ApplyComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ApplyModule {

}
