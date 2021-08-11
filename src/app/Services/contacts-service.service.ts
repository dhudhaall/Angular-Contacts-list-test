import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  BASE_URL = environment.API_URL;
  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(this.BASE_URL + 'users');
  }

  getUsersDetails(id: number) {
    return this.http.get(this.BASE_URL + 'users/'+ id);
  }
}
