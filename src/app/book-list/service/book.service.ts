import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api_url = 'http://127.0.0.1:8081';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.api_url + '/books');
  }

  getReadingBook(): Observable<any> {
    return this.http.get(this.api_url + '/books/$id')
  }


}
