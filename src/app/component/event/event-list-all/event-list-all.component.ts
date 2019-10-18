import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenTypeService } from 'src/app/service/even-type.service';
import { EventService } from 'src/app/service/event.service';
import { MatDialog, MatPaginator, MatDialogConfig, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { EventDelComponent } from '../event-del/event-del.component';
import { EventUpComponent } from '../event-up/event-up.component';
import { Event } from 'src/app/modele/event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-list-all',
  templateUrl: './event-list-all.component.html',
  styleUrls: ['./event-list-all.component.css']
})
export class EventListAllComponent implements OnInit {

  constructor(private eventService: EventService, private dialog: MatDialog,
    private route: ActivatedRoute, private router: Router, private eventypeService: EvenTypeService,
    private location: Location, private _snackBar: MatSnackBar) {
      this.evenTypeId = this.route.snapshot.params.id; // this.route.params.subscribe(param => this.routeId = param.id);
    }

  suppressionDecision = false;
  private mesEvents;
  private evenTypeId: number; // private routeId: Object;
  private evenTypeName = '';
  showSpinner = true;
  showAllPage = false;

  displayedColumns: string[] = [/*'id', */'type', 'startingDate', 'endingDate', 'moderator', 'orator',
  'nbOfMember', 'nbOfGuest', /*'theme', 'resume', 'remark', 'adress', */'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.showSpinnerInTime();
    this.getAllMeetings();
  }

  applyFilter(filterValue: string) {
    this.mesEvents.filter = filterValue.trim().toLowerCase();
  }

  getNotification(message: string, action = 'Compte rendu') {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  goBack() {
    this.location.back();
  }

  getEventypeName() {
    this.eventypeService.getEvenType(this.evenTypeId).subscribe(
      data => this.evenTypeName = data.name
    );
  }

  /*
  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '540px';
    dialogConfig.width = '800px';

    const dialogRef = this.dialog.open(EventAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        this.eventService.addEventByEventType(data, this.evenTypeId).subscribe(
          result => this.getAllMeetings(),
        );
      },
      err => console.error(err),
    );
  }
  */

  openUpDialog(event: Event): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '630px';
    dialogConfig.width = '800px';
    dialogConfig.data = event;

    const dialogRef = this.dialog.open(EventUpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
          if (data != null) {
            this.eventService.updateEventByEventType(data.eventypeId, event.id,
              {
                id: event.id,
                begining: data.begining,
                ending: data.ending,
                speaker: data.speaker,
                moderator: data.moderator,
                nbOfGuest: data.nbOfGuest,
                nbOfMember: data.nbOfMember,
                remark: data.remark,
                summary: data.summary,
                theme: data.theme
              }
            ).subscribe(
              result => this.getAllMeetings(),
            ).add(this.getNotification('Mis à jour'));
          }
        },
        err => console.error(err),
    );
  }

  openDelDialog(event: Event): void {
    const dialogRef = this.dialog.open(EventDelComponent, {
      width: '500px',
      data: event,
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.suppressionDecision = data;
        if (this.suppressionDecision) {
          this.eventService.deleteEvent(event.id).subscribe(
            result => this.getAllMeetings(),
          ).add(this.getNotification('Suppression'));
        }
      },
      err => console.error(err),
    );
  }

  getAllMeetings() {
    this.eventService.getEvents().subscribe(
      data => {
        this.mesEvents = new MatTableDataSource(data);
        setTimeout(() => {
          this.mesEvents.paginator = this.paginator;
        });
      }
    );
  }

  showSpinnerInTime() {
    setTimeout(() => {
      this.showSpinner = false;
      this.showAllPage = true;
    });
  }

}
