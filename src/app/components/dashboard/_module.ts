import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSharedModule } from 'src/app/shared/mat.module';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    DashboardComponent
  ],

  imports: [
    MatSharedModule,
    SidebarModule.forRoot(),
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