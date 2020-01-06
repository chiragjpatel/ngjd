import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  login() {
    this.spinner.show();
    this.authService.login(this.user).subscribe(
      next => {
         this.alertify.success('Login successfully');
      },
      error => {
        this.alertify.error('Failed login');
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('loged out');
  }
}
