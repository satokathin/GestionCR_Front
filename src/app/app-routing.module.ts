import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './component/event/event-list/event-list.component';
import { EventUpComponent } from './component/event/event-up/event-up.component';
import { EventAddComponent } from './component/event/event-add/event-add.component';
import { EvenTypeListComponent } from './component/eventype/even-type-list/even-type-list.component';
import { EvenTypeUpComponent } from './component/eventype/even-type-up/even-type-up.component';
import { EvenTypeAddComponent } from './component/eventype/even-type-add/even-type-add.component';
import { LoginComponent } from './component/login/login.component';
import { EventListAllComponent } from './component/event/event-list-all/event-list-all.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  // { path : '', component : EvenTypeListComponent } ,
  { path : '', redirectTo: 'login', pathMatch: 'full' } ,
  { path : 'events', component : EventListComponent, canActivate: [AuthGuard] },
  // { path : 'event/:id', component : EventUpComponent } ,
  // { path : 'event', component : EventAddComponent } ,
  { path : 'eventypes/:id/events',  component : EventListComponent, canActivate: [AuthGuard] },
  // { path : 'eventypes/:id/events', redirectTo: 'events' },
  { path : 'eventypes', component : EvenTypeListComponent, canActivate: [AuthGuard] } ,
  // { path : 'eventype/:id', component : EvenTypeUpComponent },
  // { path : 'eventype', component : EvenTypeAddComponent },
  { path : 'eventall', component : EventListAllComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
