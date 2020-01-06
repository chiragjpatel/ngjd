import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AuthService } from 'src/app/_services/auth.service';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dropdown-site-list',
  templateUrl: './dropdown-site-list.component.html',
  styleUrls: ['./dropdown-site-list.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DropdownSiteListComponent implements OnInit {
  baseUrl =  environment.apiUrl + '/accounts/login';
  deCodedToken: any;
  jwtHelper = new JwtHelperService();
  userSites: any;
  constructor(private authservice: AuthService ) { }

  ngOnInit() {
  }

  // getCurrentUserSites(token) {

  //   this.deCodedToken = this.jwtHelper.decodeToken(token);

  // }
}
