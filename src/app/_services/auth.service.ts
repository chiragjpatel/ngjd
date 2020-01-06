import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl =  environment.apiUrl + '/accounts/login';
  jwtHelper = new JwtHelperService();
  deCodedToken: any;
  userFromResponse: any;

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(this.baseUrl, user).pipe(
      map((response: any) => {
        this.userFromResponse = response;
        if (user) {
          localStorage.setItem('token', this.userFromResponse.token);
          this.deCodedToken = this.jwtHelper.decodeToken(this.userFromResponse.token);
          console.log(this.deCodedToken);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    this.deCodedToken = this.jwtHelper.decodeToken(token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(user: any) {
    return this.http.post(this.baseUrl + 'register', user);
  }
}
