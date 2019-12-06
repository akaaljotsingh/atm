import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '',
        loadChildren: '../public/public.module#PublicModule'
    },
    {
        path: '',
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
        MasterComponent
    ],
    providers: []
})
export class MasterModule { }
