import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from '../Models/Users';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
      .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-Auth')
      .append('Access-Control-Allow-Origin', 'http://185.216.25.16:5000/')
};

const apiUrl = 'https://185.216.25.16:5000/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);
  constructor(
      private  http: HttpClient,
      private storage: Storage,
      private router: Router,
      private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.isUserLoggedIn();
    });
  }

  async login(identifiant: Users, errorcb) {
    return this.http.post(apiUrl , identifiant, httpOptions)
        .subscribe((data: any) => {
          const session = {
            mail: identifiant.email,
            token: data.jwtoken
          };
          this.storage.set('USER_INFO', session ).then((response) => {
            this.authState.next(true);
            this.router.navigate([]);
          });
        },  error => {
          if (error.statusText === 'Unknown Error') {
            errorcb('Pas de connexion');
          } else if (error.statusText === 'Unauthorized') {
            errorcb('L\'identifiant ou le mot de passe est incorrect');
          } else {
            console.log(error);
          }
        });
  }
  isUserLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  logout() {
    this.storage.clear().then(() => {
      this.router.navigate([]);
    });
    this.authState.next(false);
  }

  register(identifiant: Users) {
    return this.http.post<Users>(apiUrl, identifiant);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
