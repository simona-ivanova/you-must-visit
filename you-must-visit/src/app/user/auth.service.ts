import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  isLoggedin: boolean = false;

  constructor(
    public fireauth: AngularFireAuth,
    private router: Router) { }


    ngOnInit(): void {
     
    }


  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(
        res => {
          localStorage.setItem('user', JSON.stringify(res.user));

          console.log();
          
          this.router.navigate(['/']);
          // console.log(  res.user?.email);
  
        }, err => {
          alert(err.message);
          this.router.navigate(['/login']);
        })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  isLoggedIn() {
    if (localStorage.getItem("user") == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }

}
