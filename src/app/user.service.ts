import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './beans/User';
import { NullTemplateVisitor } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      password: user.password,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      secondName: user.secondName,
      surname: user.surname,
      cash: null,
      id: null,
      iban: ''

    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl + '/user-managment/register', body, {headers : reqHeader});
  }

  userAuthentication(user: User): Observable <any> {
    const body2: User = {
      password: user.password,
      username: user.username,
      email: '',
      firstName: '',
      secondName: '',
      surname: '',
      cash: null,
      id: null,
      iban: ''

    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/user-managment/login' , body2,  { headers: reqHeader });
  }

  getUserClaims(id: string) {
    const asd = +id;
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return  this.http.get(this.rootUrl + '/user-managment/getInfo?id=' + asd, {headers : reqHeader});
   }
}
