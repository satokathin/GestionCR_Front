import { Component, OnInit, Inject } from '@angular/core';
import { EvenTypeService } from 'src/app/service/even-type.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-even-type-del',
  templateUrl: './even-type-del.component.html',
  styleUrls: ['./even-type-del.component.css']
})
export class EvenTypeDelComponent implements OnInit {

  constructor(private evenTypeService: EvenTypeService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<EvenTypeDelComponent>, @Inject(MAT_DIALOG_DATA) private data) {}

 form: FormGroup;

 ngOnInit() {
  this.form = this.fb.group({});
 }

 onNoClick(): void {
   this.dialogRef.close(false);
 }

 onDelEvenTypeClick() {
   this.dialogRef.close(true);
 }

}
