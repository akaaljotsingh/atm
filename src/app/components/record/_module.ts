import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { MatSharedModule } from 'src/app/shared/mat.module';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
 RecordComponent,
  ],

  imports: [
    ReactiveFormsModule,
    FormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatSharedModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', component: RecordComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class RecordModule {

}
