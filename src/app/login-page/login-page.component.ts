import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoginError: Boolean = false;
  constructor(private userService: UserService, private router: Router) { }

    login(username, password) {
    this.userService.userAuthentication(username, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }
  ngOnInit() {
  }

}
