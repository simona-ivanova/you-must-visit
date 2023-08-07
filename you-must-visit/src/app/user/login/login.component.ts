import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string = '';
  // password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const { email, pswd } = form.value;

    if (form.invalid) {
      return;
    }
  
    this.auth.login(email, pswd);

  }

}
