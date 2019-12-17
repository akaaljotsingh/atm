import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {InvitePopupComponent} from '../../shared/invite-popup/invite-popup.component'
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
        path: 'admin',
        component: MasterComponent,
        children: [
            {
                path: 'sample',
                loadChildren: 'src/app/components/sample/_modules#SampleModule'
            },
            {
                path: 'dashboard',
                loadChildren: 'src/app/components/dashboard/_module#DashboardModule'
            }
            
        ],

    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
<<<<<<< HEAD
        MatSidenavModule,
        MatTooltipModule,
        MatDialogModule,
        MatRadioModule
=======
        SidebarModule.forRoot()
>>>>>>> 05e51e5a9484fd66a56b3028ec61159b69bd2a45
    ],

    declarations: [
        MasterComponent,
        PublicComponent,
        InvitePopupComponent 
    ],
    providers: [],
    entryComponents: [InvitePopupComponent]
})
export class MasterModule { }
