import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './Public.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    declarations: [
        PublicComponent
    ],
    exports: [],
    providers: []
})
export class PublicModule { }
