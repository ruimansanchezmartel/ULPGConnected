import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authError: any;
  info: any;
  user = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  signUp() {
    this.userService.checkUsername(this.user.username).pipe(take(1)).subscribe((dato:any) => {
      if (dato) {
        alert("This username already exist");
      }else{
        this.auth.signUp(this.user.name,this.user.surname,this.user.username, this.user.email, this.user.password);
      }
    })
  }
}
