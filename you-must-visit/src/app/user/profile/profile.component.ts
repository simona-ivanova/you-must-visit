import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string;
  userEmail: any;

  constructor(private auth: AuthService, private router: Router, public fireauth: AngularFireAuth) { }

  ngOnInit(): void {
    this.fireauth.onAuthStateChanged((user) => {
      if (user) {
        this.userEmail = user.email
      } else {
        return undefined
      }
      let initialUsername = this.userEmail.split("@")[0];
      this.username = initialUsername.charAt(0).toUpperCase() + initialUsername.slice(1);
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
