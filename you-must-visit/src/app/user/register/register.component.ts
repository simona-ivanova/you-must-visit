import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // email: string = '';
  // password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    let { email, pswd, repeatPswd } = form.value;

    if (pswd !== repeatPswd) {
      return
    }

    this.auth.register(email, pswd);

    email = '';
    pswd = '';
  }

}
