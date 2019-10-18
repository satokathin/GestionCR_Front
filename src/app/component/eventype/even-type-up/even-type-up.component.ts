import { Component, OnInit, Inject } from '@angular/core';
import {EvenTypeService} from '../../../service/even-type.service';
import { EvenType } from 'src/app/modele/even-type';
import {ActivatedRoute} from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-even-type-up',
  templateUrl: './even-type-up.component.html',
  styleUrls: ['./even-type-up.component.css']
})
export class EvenTypeUpComponent implements OnInit {

  constructor(private evenTypeService: EvenTypeService, private route: ActivatedRoute,
    private fb: FormBuilder, private dialogRef: MatDialogRef<EvenTypeUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
        // this.name = this.data ? this.data.name : '';
     }

  private eventype: EvenType;
  form: FormGroup;
  name: string;


  ngOnInit() {
    // this.getEventype(this.route.snapshot.params.id);
    this.form = this.fb.group({
      name: this.data ? this.data.name : '', // [name, []],
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onUpEvenTypeClick() {
    this.dialogRef.close(this.form.value);
  }

}
