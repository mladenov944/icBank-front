import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

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

  transfer() {
    this.router.navigate(['/home']);
  }
}
