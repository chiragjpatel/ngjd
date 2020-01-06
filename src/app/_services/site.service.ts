import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  baseUrl =  environment.apiUrl + '/sites/mine';
  token = localStorage.getItem('token');

constructor(private http: HttpClient) { }


 userSites(token) {
 }

}
