import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  replySection=false;
  replyMessage=false;

  constructor() { }

  ngOnInit() {
  }

}
