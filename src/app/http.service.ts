import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod () {
    console.log('My service works');
  }

  getBeer(){

     return this.http.get('https://api.openbrewerydb.org/breweries')

  }


}
