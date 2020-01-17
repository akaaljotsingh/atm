import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-invite-popup',
  templateUrl: './invite-popup.component.html',
  styleUrls: ['./invite-popup.component.scss']
})
export class InvitePopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InvitePopupComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
