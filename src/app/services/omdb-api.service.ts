import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL="https://www.omdbapi.com"
  private _key="?apikey=d3b6d7d9&t="
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDResponse> {
    return this._http.get<IOMDResponse>(this._siteURL+ this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }
}
