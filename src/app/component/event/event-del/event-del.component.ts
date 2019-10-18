import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-del',
  templateUrl: './event-del.component.html',
  styleUrls: ['./event-del.component.css']
})
export class EventDelComponent implements OnInit {

  constructor(private eventService: EventService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<EventDelComponent>, @Inject(MAT_DIALOG_DATA) private data) {}

 form: FormGroup;

 ngOnInit() {
  this.form = this.fb.group({});
 }

 onNoClick(): void {
   this.dialogRef.close(false);
 }

 onDelEventClick() {
   this.dialogRef.close(true);
 }

}
