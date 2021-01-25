import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = 'http://localhost:8000/api'

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    // let json = JSON.stringify(username);
    // let params = json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post<any>(`${this.api_url}/auth/`, { username, password }, { headers: headers }).subscribe(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['home']);
      }
    });

  }

  getCurrentUser(): Boolean {
    if (localStorage.getItem('currentUser'))
      return true;
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
