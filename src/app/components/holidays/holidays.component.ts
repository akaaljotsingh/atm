import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  type: string;
  from: string;
  to: string;
  day: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name:'Amarjeet Singh', type:'Sick', from:'22/12/2019', to:'23/12/2019', day:2 },
  {name:'Amarjeet Singh', type:'Personal work', from:'22/12/2019', to:'23/12/2019', day:2 },
  {name:'Amarjeet Singh', type:'Annual Leave', from:'22/12/2019', to:'23/12/2019', day:2 },
  {name:'Amarjeet Singh', type:'Other', from:'22/12/2019', to:'23/12/2019', day:1 },
  {name:'Akaljot Singh', type:'Sick', from:'22/12/2019', to:'23/12/2019', day:5 },
  {name:'Baljit Singh', type:'Sick', from:'22/12/2019', to:'23/12/2019', day:3 },

];

export interface userdata {
  name: string;
  type: string;
  from: string;
  to: string;
  day: number;
  status: string;
}

const USER_DATA: userdata[] = [
  {name: 'Amarjeet Singh', type: 'Sick', from: '22/12/2019', to: '23/12/2019', day: 2, status: 'Pending' },
  {name:'Amarjeet Singh', type:'Personal work', from:'22/12/2019', to:'23/12/2019', day:2, status:'Pending' },
  {name:'Amarjeet Singh', type:'Annual Leave', from:'22/12/2019', to:'23/12/2019', day:2, status:'Pending' },
  {name:'Amarjeet Singh', type:'Other', from:'22/12/2019', to:'23/12/2019', day:1, status:'Pending' },
];

export interface YEAR {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})



export class HolidaysComponent implements OnInit {

  // YEAR: YEAR[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  selected = 'option1';

  displayedColumns: string[] = ['name', 'type', 'from', 'to', 'day'];
  dataSource = ELEMENT_DATA;

  displayedCol: string[] = ['name', 'type', 'from', 'to', 'day', 'status'];
  dataS = USER_DATA;

 ngOnInit() {
    }
  }


