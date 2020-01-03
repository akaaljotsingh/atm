import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSharedModule } from 'src/app/shared/mat.module';



@NgModule({
  declarations: [
    HolidaysComponent,
  ],
 
    

  imports: [
    MatTabsModule,
        MatTableModule, 
        MatSharedModule, 
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HolidaysComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class HolidaysModule {

}