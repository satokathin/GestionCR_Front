import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { EvenType } from '../modele/even-type';

@Injectable({
  providedIn: 'root'
})
export class EvenTypeService {
  private apiURL3 = 'meetings/api/v1/meetingtypes/';
  private apiURL = 'http://localhost:8080/meetings/api/v1/meetingtypes/';

  private httpOptions = {
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
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEvenTypes(): Observable<any> {
    return this.httpClient.get(this.apiURL).pipe(
      map(this.extractData));
  }

  getEvenType(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + id).pipe(
      map(this.extractData));
  }

  addEvenType (evenType: EvenType): Observable<EvenType> {
    if (null != evenType && null != evenType.name) {
      return this.httpClient.post<EvenType>(this.apiURL, evenType, this.httpOptions).pipe(
        tap(_ => console.log(`added EvenType w/ id=${evenType.id}`)),
        catchError(this.handleError<any>('addEvenType'))
      );
    }
    catchError(this.handleError<any>('addEvenType'));
  }

  updateEvenType(id: number, evenType: EvenType): Observable<any> {
    if (null != evenType && null != evenType.name) {
      return this.httpClient.put(this.apiURL + id, evenType, this.httpOptions).pipe(
        tap(_ => console.log(`updated EvenType id=${id}`)),
        catchError(this.handleError<any>('updateEvenType'))
      );
    }
    catchError(this.handleError<any>('updateEvenType'));
  }

  deleteEvenType (id: number): Observable<any> {
    return this.httpClient.delete<any>(this.apiURL + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted EvenType id=${id}`)),
      catchError(this.handleError<any>('deleteEvenType'))
    );
  }
}
