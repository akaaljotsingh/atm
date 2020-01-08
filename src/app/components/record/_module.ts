import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';







@NgModule({
  declarations: [
 RecordComponent,
  ],

  imports: [
    MatTabsModule,
    MatInputModule,
    MatTableModule,
   

    CommonModule,
    RouterModule.forChild([
      { path: '', component: RecordComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class RecordModule {

}
