import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Data } from "../model/data";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
      .set('Access-Control-Allow-Origin', '*')
};
const apiUrl = 'localhost:3000/datas';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getDatas(): Observable<Data[]> {
    const url = `${apiUrl}/`;
    return this.http.get<Data[]>(apiUrl)
        .pipe(
            tap(datas => console.log('fetched datas')),
            catchError(this.handleError('getDatas', []))
        );
  }

  getData(_id: number): Observable<Data> {
    const url = `${apiUrl}/${_id}`;
    return this.http.get<Data>(url).pipe(
        tap(_ => console.log(`fetched product id=${_id}`)),
        catchError(this.handleError<Data>(`getProduct id=${_id}`))
    );
  }
}
