import { Component, OnInit, Inject } from '@angular/core';
import {EvenTypeService} from '../../../service/even-type.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvenType } from 'src/app/modele/even-type';

@Component({
  selector: 'app-even-type-add',
  templateUrl: './even-type-add.component.html',
  styleUrls: ['./even-type-add.component.css']
})
export class EvenTypeAddComponent implements OnInit {

  constructor(private evenTypeService: EvenTypeService,
     private dialogRef: MatDialogRef<EvenTypeAddComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  private eventype: EvenType;
  private name: string;

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onAddEvenTypeClick() {
    this.dialogRef.close(this.eventype = {
      id: 0,
      name: this.name ? this.name : null
    });
  }

}
