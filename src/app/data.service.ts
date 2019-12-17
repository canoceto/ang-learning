import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?per_page=20');
  }

  getUser(id: number) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  addUser(user) {
    return this.http.post('https://reqres.in/api/users/', user);
  }
}
