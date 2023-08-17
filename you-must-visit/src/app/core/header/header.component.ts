import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  username!: string;
  isAuthenticated: boolean = true;

  constructor(private authService: AuthService,
    public fireauth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    let userEmail:any;

    this.fireauth.onAuthStateChanged((user) => {
      if (user) {
        userEmail = user.email
      } else {
        return undefined
      }
      let initialUsername = userEmail.split("@")[0];
      this.username = initialUsername.charAt(0).toUpperCase() + initialUsername.slice(1);
    })
  };

  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
    return this.isAuthenticated
  }

}
