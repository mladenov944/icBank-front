import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './beans/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    console.log(user.username);
    const body: User = {
      password: user.password,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      secondName: user.secondName,
      surname: user.surname
    };
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.post(this.rootUrl + '/user-managment/register', body, {headers : reqHeader});
  }

  userAuthentication(username, password) {
    const data = 'username=' + username + '&password=' + password + 'grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
}
