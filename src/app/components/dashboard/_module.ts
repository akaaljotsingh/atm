import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSharedModule } from 'src/app/shared/mat.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],

  imports: [
    MatSharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class DashboardModule {

}