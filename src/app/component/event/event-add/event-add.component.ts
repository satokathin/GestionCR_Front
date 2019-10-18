import { Component, OnInit, Inject } from '@angular/core';
import {EventService} from '../../../service/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from 'src/app/modele/event';
import { Time } from '@angular/common';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
private event: Event;
private moderator: string;
private speaker: string;
private theme: string;
private summary: string;
private remark: String;
private begining: Date;
private ending: Date;
private nbOfMember: number;
private nbOfGuest: number;
private endingTime: Time;
private eventypeId: number;
  constructor(private eventService: EventService, private dialogRef: MatDialogRef<EventAddComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onAddEvenClick() {
    this.dialogRef.close(this.event = {
      id : 1,
      moderator : this.moderator,
      speaker : this.speaker,
      theme : this.theme,
      summary : this.summary,
      remark : this.remark,
      begining : this.begining,
      ending : this.ending,
      nbOfMember : this.nbOfMember,
      nbOfGuest : this.nbOfGuest,
      // endingTime : this.endingTime;
    });
  }

}
