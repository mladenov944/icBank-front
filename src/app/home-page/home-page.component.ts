import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userClaims: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    const idData = localStorage.getItem('id');
    this.userService.getUserClaims(idData).subscribe((data: any) => {
      this.userClaims = data;

    },
    (err: HttpErrorResponse) => {
      this.router.navigate(['/login']);
      alert('Не сте логнат! ');
    });
  }

  Logout() {
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  transfer() {
    this.router.navigate(['/transfer']);
  }

}
