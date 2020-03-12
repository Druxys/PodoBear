import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Data} from '../Models/Data';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
      .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-Auth')
      .append('Access-Control-Allow-Origin', 'http://185.216.25.16:5000/')
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5' +
          'jb20iLCJ1c2VySWQiOiI1ZTY3OWE2OTIzNWY3NTU1MGMwZDdmNDMiLCJyb2xlIjoidXNlciIsImlhdCI6MTU4MzkxNDgwNCwiZXhwIjoxNTg' +
          'zOTE4NDA0fQ.MQpK1BjrsPTL42iRjp3CfDPCIk4CiIJZAjTTuGR4g_Y')
};
const apiUrl = 'https://185.216.25.16:5000/datas';

const id_device = '2aa9bc5d9db39a4d';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getDatas(): Observable<Data[]> {
        const url = `${apiUrl}/getall`;
        return this.http.get<Data[]>(url, httpOptions)
            .pipe(
                tap(datas => console.log('fetched datas')),
                catchError(this.handleError('getDatas', []))
            );
    }

    getData(): Observable<Data> {
        const url = `${apiUrl}/getbydevice/2aa9bc5d9db39a4d`;
        console.error('Get Data by id Device');
        return this.http.get<Data>(url).pipe(
            tap(_ => console.log(`fetched product id=${id_device}`)),
            catchError(this.handleError<Data>(`getProduct id=${id_device}`))
        );
    }
}
