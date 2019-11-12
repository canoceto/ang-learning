import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  firstClick() {
    return window.alert('Service');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
