import { Component, OnInit } from '@angular/core';
import { User } from '../beans/User';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
@Injectable()
export class RegisterPageComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  register(form: NgForm) {
    this.userService.registerUser(form.value).subscribe(
      data => {
        this.resetForm(form);
        alert('Вашата регистрация премина успешно!');
        return true;
    }, error => {
      alert('Неуспешна регистрация!');
      return null;
    }
    );
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
    secondName: ''
  };
}
}

ngOnInit() {
  this.resetForm();
}

}
