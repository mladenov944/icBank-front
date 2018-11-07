import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../beans/User';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User;
  isLoginError: Boolean = false;
  constructor(private userService: UserService, private router: Router) { }

    login(form: NgForm) {
    this.userService.userAuthentication(form.value).subscribe((data: any) => {
      localStorage.setItem('id', data.id);
      console.log(data.id);
      this.router.navigate(['/home']);
      return true;
    },
    (err: HttpErrorResponse) => {
      this.resetForm(form);
      console.log(err);
      alert('Грешно потребилтелско име или парола!');
      this.isLoginError = true;
    });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    this.user = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      surname: '',
      secondName: '',
      cash: null,
      id: null,
      iban: ''

    };
  }
  }
  ngOnInit() {
    this.resetForm();
  }


}
