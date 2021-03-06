import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent, dialogComponent,integrationComponent,automationComponent,boardcomponent } from './dashboard.component';
import { MatSharedModule } from 'src/app/shared/mat.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from 'ng-sidebar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    DashboardComponent,
    dialogComponent,
    integrationComponent,
    automationComponent,
    boardcomponent,
   

  ],

  imports: [
    MatSharedModule,
    SidebarModule.forRoot(),
    CommonModule,
    MatTooltipModule,
    MatDialogModule,
    MatSidenavModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    
   
    
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
    ])
  ],
  providers: [],
  entryComponents: [dialogComponent,integrationComponent,automationComponent,boardcomponent,]

})
export class DashboardModule {

}