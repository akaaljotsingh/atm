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
import {MatRadioModule} from '@angular/material/radio';
import { SidebarModule } from 'ng-sidebar';

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
                path: 'notification',
                loadChildren: 'src/app/components/notification/_modules#NotificationModule'
            }
            
        ],

    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatSidenavModule,
        MatTooltipModule,
        MatDialogModule,
        MatRadioModule,
        SidebarModule.forRoot()
    ],

    declarations: [
        MasterComponent,
        PublicComponent,
        InvitePopupComponent,
        HelpPopupComponent 
    ],
    providers: [],
    entryComponents: [InvitePopupComponent,HelpPopupComponent]
})
export class MasterModule { }
