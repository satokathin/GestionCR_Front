import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Event } from '../modele/event';

const apiURL3 = 'http://localhost:8080/meetings/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiURL2 = 'meetings/api/v1/';
  private apiURL = 'http://localhost:8080/meetings/api/v1/meetingtypes/';

  private httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getEvents(): Observable<any> {
    return this.httpClient.get(apiURL3 + 'meetings').pipe(
      map(this.extractData));
  }

  getEventsByEventType(id: number): Observable<any> {
    return this.httpClient.get(apiURL3 + 'meetingtypes/' + id + '/meetings').pipe(
      map(this.extractData));
  }

  getEvent(id: number): Observable<any> {
    return this.httpClient.get(apiURL3 + 'meetings/' + id).pipe(
      map(this.extractData));
  }

  getEventByEventType(id: number, eventypeId: number): Observable<any> {
    return this.httpClient.get(apiURL3 + 'meetingtypes/' + eventypeId + '/meetings/' + id).pipe(
      map(this.extractData));
  }

  addEvent (event: Event): Observable<any> {
    if (null != event) {
      return this.httpClient.post<any>(apiURL3 + 'meetings', event, httpOptions).pipe(
        tap(_ => console.log(`added Event w/ id=${event.id}`)),
        catchError(this.handleError<any>('addEvent'))
      );
    }
  }

  addEventByEventType(event: Event, eventypeId: number): Observable<any> {
    if (null != event) {
      return this.httpClient.post<any>(apiURL3 + 'meetingtypes/' + eventypeId + '/meetings', event, httpOptions).pipe(
        tap(_ => console.log(`added Event w/ id=${event.id}`)),
        catchError(this.handleError<any>('addEvent'))
      );
    }
  }

  updateEvent (id: number, event: Event): Observable<any> {
    return this.httpClient.put(apiURL3 + 'meetings/' + id, event, httpOptions).pipe(
      tap(_ => console.log(`updated Event id=${id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
  }

  updateEventByEventType (eventypeId: number, id: number, event: Event): Observable<any> {
    return this.httpClient.put(apiURL3 + 'meetingtypes/' + eventypeId + '/meetings/'
     + id, event, httpOptions).pipe(
      tap(_ => console.log(`updated Event id=${id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
  }

  deleteEvent (id: number): Observable<any> {
    return this.httpClient.delete<any>(apiURL3 + 'meetings/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Event id=${id}`)),
      catchError(this.handleError<any>('deleteEvent'))
    );
  }

  deleteEventByEventType (eventypeId: number, id: number): Observable<any> {
    return this.httpClient.delete<any>(apiURL3 + 'meetingtypes/' + eventypeId + '/meetings/'
     + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Event id=${id}`)),
      catchError(this.handleError<any>('deleteEvent'))
    );
  }
}
