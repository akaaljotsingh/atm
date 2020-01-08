import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'id', 'usedleaves', 'Leftleaves','extraleaves'];
  dataSource = ELEMENT_DATA;


  constructor() { 
   
  }

  ngOnInit() {
  }
 

}
export interface PeriodicElement {
  name: string;
  ID: number;
  Usedleaves: number;
  Leftleaves: number;
  extraleaves:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'smith', ID: 55076, Usedleaves: 9, Leftleaves:3,extraleaves:2},
  {name: 'smith', ID: 76898, Usedleaves:6, Leftleaves: 6,extraleaves:2},
  {name: 'smith', ID: 71268, Usedleaves: 6,Leftleaves: 6,extraleaves:2},
  {name: 'smith', ID: 76869, Usedleaves: 9, Leftleaves: 3,extraleaves:2},
  {name: 'smith', ID: 86798, Usedleaves: 2, Leftleaves: 10,extraleaves:2},
  {name: 'smith', ID: 57896, Usedleaves: 7, Leftleaves: 5,extraleaves:2},
  {name: 'smith', ID: 61276, Usedleaves: 6, Leftleaves: 6,extraleaves:2},
  {name: 'smith', ID: 32768, Usedleaves: 4, Leftleaves: 8,extraleaves:2},
  {name: 'smith', ID: 76098, Usedleaves:4, Leftleaves: 8,extraleaves:2},
  {name: 'smith', ID: 71208, Usedleaves: 2, Leftleaves: 10,extraleaves:2},
];
