import { Component, OnInit, ViewChild } from '@angular/core';
import {EvenTypeService} from '../../../service/even-type.service';
import { EvenType } from 'src/app/modele/even-type';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EvenTypeAddComponent } from '../even-type-add/even-type-add.component';
import { EvenTypeUpComponent } from '../even-type-up/even-type-up.component';
import { EvenTypeDelComponent } from '../even-type-del/even-type-del.component';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-even-type-list',
  templateUrl: './even-type-list.component.html',
  styleUrls: ['./even-type-list.component.css']
})
export class EvenTypeListComponent implements OnInit {
  suppressionDecision = false;
  private mesEventypes;
  showSpinner = true;
  showAllPage = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private evenTypeService: EvenTypeService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  displayedColumns: string[] = [/*'id', */'name', 'edit', 'delete'];

  ngOnInit() {
    this.showSpinnerInTime();
    this.getMeetingTypes();
  }

  applyFilter(filterValue: string) {
     this.mesEventypes.filter = filterValue.trim().toLowerCase();
  }

  getNotification(message: string, action = 'Type de réunion') {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  getMeetingTypes() {
    this.evenTypeService.getEvenTypes().subscribe(
      data => {
        this.mesEventypes = new MatTableDataSource(data);
        setTimeout(() => {
          this.mesEventypes.paginator = this.paginator;
          this.showSpinner = false;
          this.showAllPage = true;
        });
        // this.setSpinnerToFalse();
      }
    );
  }

  showSpinnerInTime() {
    setTimeout(() => {
      /*this.showSpinner = false;
      this.showAllPage = true;
    }, 1000);*/
  });
  }

  setSpinnerToFalse() {
    setTimeout(() => {
      this.showSpinner = false;
      this.showAllPage = true;
    });
  }

  openAddDialog(eventype: EvenType): void {
    const dialogRef = this.dialog.open(EvenTypeAddComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != null) {
          this.evenTypeService.addEvenType(data).subscribe(
            result => this.getMeetingTypes()
          ).add(this.getNotification('Ajout'));
        }
      },
      err => console.error(err),
    );
  }

  openUpDialog(eventype: EvenType): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = eventype;

    const dialogRef = this.dialog.open(EvenTypeUpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
          if (data != null) {
            this.evenTypeService.updateEvenType(eventype.id,
              {
                id: eventype.id,
                name: data.name
              }
            ).subscribe(
              result => this.getMeetingTypes(),
            ).add(this.getNotification('Mis à jour '));
          }
        },
        err => console.error(err),
    );
  }

  openDelDialog(eventype: EvenType): void {
    const dialogRef = this.dialog.open(EvenTypeDelComponent, {
      width: '500px',
      data: eventype,
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.suppressionDecision = data;
        if (this.suppressionDecision) {
          this.evenTypeService.deleteEvenType(eventype.id).subscribe(
            result => this.getMeetingTypes(),
          ).add(this.getNotification('Suppression'));
        }
      },
      err => console.error(err),
    );
  }

}
/*
private eventypes: EvenType[] = [
    {id: 1, name: 'Culte du dimanche de l\'assemblée'},
    {id: 2, name: 'Croisade de prière de l\'assemblée'},
    {id: 3, name: 'Croisade de prière de l\'église'},
    {id: 4, name: 'Réunion de prière bimensuel de l\'assemblée'},
    {id: 5, name: 'Intercession jeunante de l\'église pour la France le mercredi'},
    {id: 6, name: 'Prière de la chambre de prière de l\'église'},
    {id: 7, name: 'Siège d\'enseignement de l\'assemblée'},
    {id: 8, name: 'Réunion d\'assemblée de maison'},
 ]*/
