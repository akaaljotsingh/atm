import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay,  endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivityComponent} from '../../shared/activity/activity.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export interface PeriodicElement {
  name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: '13th January ', symbol: 'Lorhi'},
  { name: '9th March',  symbol: 'Holi/Hola Mahala'},
  { name: '13th April', symbol: 'Vaisakhi'},
  { name: '3rd August', symbol: 'Raksha Bandhan'},
  { name: '13th November', symbol: 'Diwali'},
  { name: '16th November',  symbol: 'Diwali'},
  { name: '30th November', symbol: 'Guru Nanak Birthday'},
  { name: '25th December', symbol: 'Shaheedi Diwas'},
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, public dialog: MatDialog) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }










  taskFlag: boolean = false;
  SearchFlag = false;

  openDialog(): void {
    const dialogRef = this.dialog.open(dialogComponent, {
      width: '500px',  
    }); }

    openIntegration(): void {
      const dialogRef = this.dialog.open(integrationComponent, {
        width: '1000px',
      }); }

      openAutomation(): void {
        const dialogRef = this.dialog.open(automationComponent, {
          width: '1000px',
        }); }

        openBoard(): void {
          const dialogRef = this.dialog.open(boardcomponent, {
            width: '600px',
          }); }
          
          openActivity(): void {
            const dialogRef = this.dialog.open(ActivityComponent, {
              width: '770px',
            }); } 

    // constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  displayedColumns =
  ['name',  'symbol'];
dataSource = ELEMENT_DATA;

private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
 

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
