import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {


  constructor( private http: HttpClient) { }
  sendMail(url,mail){
    return this.http.post(url,mail);
  }
}
