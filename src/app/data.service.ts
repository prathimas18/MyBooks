import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, Subject, throwError as observableThrowError, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  searchResult$: Observable<any>;
  private searchResultSubject = new Subject<string>();

  constructor(private http: HttpClient) {
    this.searchResult$ = this.searchResultSubject.asObservable();
  }

  getEvents(): Observable<any> {
    return this.http.get('https://reststop.randomhouse.com/resources/authorevents/?start=1&max=3')
      .pipe(catchError(this.errorHandler));
  }



  getDataOfMutipleAuthors(): Observable<any[]> {
    let author1 = this.http.get('https://reststop.randomhouse.com/resources/authors/3446');
    let author2 = this.http.get('https://reststop.randomhouse.com/resources/authors/11178');
    let author3 = this.http.get('https://reststop.randomhouse.com/resources/authors/52588');
    return forkJoin([author1, author2, author3]);
  }

  searchResults(searchList) {
    this.searchResultSubject.next(searchList);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError("Something went wrong");
  }
}
