import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {InvitePopupComponent} from '../../shared/invite-popup/invite-popup.component'

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  notificationBox=false;

  // notificationBoxClose(){
  //  // alert();
  // }
          
  @HostListener('document:click', ['$event'])
  clickout(event) {
    
    if(this.eRef.nativeElement.contains(event.target)) {
       //this.notificationBox=true;
    } else {
      this.notificationBox=false;
    }
  }

  constructor(private eRef: ElementRef,public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(InvitePopupComponent, {
      width: '650px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}
