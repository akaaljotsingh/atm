import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  openDialog(): void {
    const dialogRef = this.dialog.open(dialogComponent, {
      width: '1000px',
      
      
    }); }
    openDialoge(): void {
      const dialogRef = this.dialog.open(integrationComponent, {
        width: '1000px',
        
        
      }); }
      openDialogee(): void {
        const dialogRef = this.dialog.open(automationComponent, {
          width: '1000px',
          
          
        }); }
        openDialogue(): void {
          const dialogRef = this.dialog.open(boardcomponent, {
            width: '1000px',
            
            
          }); }

    constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  displayedColumns =
  ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
dataSource = ELEMENT_DATA;

}

@Component({
  selector: 'dialogComponent',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dialogComponent {

  constructor(
    public dialogRef: MatDialogRef<dialogComponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'integrationComponent',
  templateUrl: './integration.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class integrationComponent {

  constructor(
    public dialogRef: MatDialogRef<integrationComponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'automationComponent',
  templateUrl: './automation.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class automationComponent {

  constructor(
    public dialogRef: MatDialogRef<automationComponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'boardcomponent',
  templateUrl: './board.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class boardcomponent {

  constructor(
    public dialogRef: MatDialogRef<boardcomponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
