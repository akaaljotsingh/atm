import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {InvitePopupComponent} from '../../shared/invite-popup/invite-popup.component'
import {HelpPopupComponent} from '../../shared/help-popup/help-popup.component'
import {ActivityComponent} from '../../shared/activity/activity.component'
import {MatRadioModule} from '@angular/material/radio';
import { SidebarModule } from 'ng-sidebar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
// import { MatSharedModule } from 'src/app/shared/mat.module';





export const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: 'src/app/components/login/_module#LoginModule'
    // },
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                loadChildren: 'src/app/components/login/_module#LoginModule'
            }
            
        ],

    },
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: 'sample',
                loadChildren: 'src/app/components/sample/_modules#SampleModule'
            },
            {
                path: 'dashboard',
                loadChildren: 'src/app/components/dashboard/_module#DashboardModule'
            },
            {
                path: 'inbox',
                loadChildren: 'src/app/components/inbox/_modules#InboxModule'
            },
           
            {
                path: 'history',
                loadChildren: 'src/app/components/holidays/_modules#HolidaysModule'
            },
            {
                path: 'notification',
                loadChildren: 'src/app/components/notification/_modules#NotificationModule'
            },
            {
                path: 'record',
                loadChildren: 'src/app/components/record/_module#RecordModule'
            },
            {
                path: 'profile',
                loadChildren: 'src/app/components/profile/_module#ProfileModule'
            },

            {
                path: 'apply',
                loadChildren: 'src/app/components/apply/_module#ApplyModule'
            },
          
            
        ],

    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatBadgeModule,
        MatSidenavModule,
        MatTooltipModule,
        MatDialogModule,
        MatRadioModule,
        MatInputModule,
        SidebarModule.forRoot(),
        MatProgressBarModule,
        MatCheckboxModule,
    ],

    declarations: [
        MasterComponent,
        PublicComponent,
        InvitePopupComponent,
        HelpPopupComponent,
        ActivityComponent
         
    ],
    providers: [],
    entryComponents: [InvitePopupComponent,HelpPopupComponent,ActivityComponent]
})
export class MasterModule { }
