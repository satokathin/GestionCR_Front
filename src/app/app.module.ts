import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatPaginatorModule, MatTableModule,
   MatIconModule, MatDialogModule, MatTooltipModule, MatSnackBarModule, MatProgressSpinnerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { EventListComponent } from './component/event/event-list/event-list.component';
import { EventAddComponent } from './component/event/event-add/event-add.component';
import { EventUpComponent } from './component/event/event-up/event-up.component';
import { EventDelComponent } from './component/event/event-del/event-del.component';
import { EvenTypeListComponent } from './component/eventype/even-type-list/even-type-list.component';
import { EvenTypeAddComponent } from './component/eventype/even-type-add/even-type-add.component';
import { EvenTypeUpComponent } from './component/eventype/even-type-up/even-type-up.component';
import { EvenTypeDelComponent } from './component/eventype/even-type-del/even-type-del.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';

import { EvenTypeService } from './service/even-type.service';
import { EventService } from './service/event.service';
import { EventListAllComponent } from './component/event/event-list-all/event-list-all.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventAddComponent,
    EventUpComponent,
    EventDelComponent,
    EvenTypeListComponent,
    EvenTypeAddComponent,
    EvenTypeUpComponent,
    EvenTypeDelComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    EventListAllComponent,
  ],
  entryComponents: [
    EvenTypeDelComponent,
    EvenTypeUpComponent,
    EvenTypeAddComponent,
    EventDelComponent,
    EventUpComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [EvenTypeService, EventService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
