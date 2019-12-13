import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';
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
            }
            
        ],

    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SidebarModule.forRoot()
    ],

    declarations: [
        MasterComponent,
        PublicComponent 
    ],
    providers: []
})
export class MasterModule { }
