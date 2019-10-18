import { Component, OnInit, Inject } from '@angular/core';
import {EventService} from '../../../service/event.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Time } from '@angular/common';

@Component({
  selector: 'app-event-up',
  templateUrl: './event-up.component.html',
  styleUrls: ['./event-up.component.css']
})
export class EventUpComponent implements OnInit {

  constructor(private eventService: EventService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<EventUpComponent>, @Inject(MAT_DIALOG_DATA) private data) {}

  private event: Event;
  form: FormGroup;
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


  ngOnInit() {
    // this.getEventype(this.route.snapshot.params.id);
    this.form = this.fb.group({
      moderator: this.data ? this.data.moderator : '', // [name, []],
      speaker: this.data ? this.data.speaker : '',
      theme: this.data ? this.data.theme : '',
      summary: this.data ? this.data.summary : '',
      remark: this.data ? this.data.remark : '',
      begining: this.data ? this.data.begining : '',
      ending: this.data ? this.data.ending : '',
      nbOfMember: this.data ? this.data.nbOfMember : '',
      nbOfGuest: this.data ? this.data.nbOfGuest : '',
      endingTime: this.data ? this.data.endingTime : '',
      eventypeId: this.data ? this.data.meetingType.id : '',
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onUpEventClick() {
    this.dialogRef.close(this.form.value);
  }
}
