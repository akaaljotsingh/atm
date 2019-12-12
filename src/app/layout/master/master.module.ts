import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';

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
            }
            
        ],

    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],

    declarations: [
        MasterComponent,
        PublicComponent 
    ],
    providers: []
})
export class MasterModule { }
